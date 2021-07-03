import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/Models/ProductModel';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-filteration-sidebar',
  templateUrl: './filteration-sidebar.component.html',
  styleUrls: ['./filteration-sidebar.component.scss'],
})
export class FilterationSidebarComponent implements OnInit {
  colors: string[] = [];
  sizes: string[] = [];
  rating:number=0;
  minprice:number=0;
  maxpricr:number=0;
  initAllProducts:ProductModel[]=[]
  @Output('myfilteration') filter = new EventEmitter<ProductModel[]>();
  @Input('products') products : ProductModel[] = [];
  brands: string[] = [];
  formbrand: FormGroup;
  formSize: FormGroup;
  minPriceControl=new FormControl('',[Validators.required,Validators.min(1)]);
  maxPriceControl=new FormControl('',[Validators.required,Validators.min(1)]);


  flag:boolean = false;

  constructor(
    fb: FormBuilder,
    private productServices: ProductService,
    private subcategory:SubCategoryService,
    private category:CategoryService
    ) {
    this.formbrand = fb.group({
      brand: fb.array([]),
    });

    this.formSize = fb.group({
      arrSizes: fb.array([]),
    });
  }

  ngOnInit(): void {
      this.initAllProducts=[...this.products]
      if (typeof this.products[0].subcategoryId == "object") {
        this.flag = true;
      }

    this.collectAllBrands();
    this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

    this.collectAllSizes();
    this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);
    this.CollectAllCollors();
    this.getMinPrice();
    this.getMaxPrice();

    this.productServices.getProductsWithoutLoad().subscribe((p)=>{



      this.products=p;
      this.restFilteration();
      this.collectAllBrands();
      this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

      this.collectAllSizes();
      this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);
      this.CollectAllCollors();
      this.getMinPrice();
      this.getMaxPrice();
      if (typeof this.products[0].subcategoryId == "object") {
        this.flag = true;
      }else{
        this.flag = false
      }


    });

  //  if(this.subCategoryId !== null){
  //   this.subcategory.getProductByCategory(this.subCategoryId).subscribe((data:any)=>{


  //     this.products=data?.result?.docs;
  //     this.collectAllBrands();
  //     this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

  //     this.collectAllSizes();
  //     this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);

  //     this.CollectAllCollors();

  //   })

  //  }else{

  //  }



  }


  ratings: number[] = [5, 4, 3, 2, 1];

  get brandsArray() {
    return this.formbrand.get('brand') as FormArray;
  }

  get sizesArray() {
    return this.formSize.get('arrSizes') as FormArray;
  }

  private collectAllBrands() {
    this.products.forEach((p) => {
      if (p.brand !== null && p.brand !== ''&& p.brand !== undefined) {
        this.brands.push(p.brand.toLowerCase().trim());
      }
    });
    this.brands = [...new Set(this.brands)];
  }



  private collectAllSizes() {
    this.products.forEach((s) => {


      if (s.size !== null  && s.size !== undefined) {
        let sizeArr = s.size.split(',');
        sizeArr.forEach((siz) => {
          if (siz.trim() != "") {
            this.sizes.push(siz.toLowerCase().trim());
          }
        });
      }
    });
    this.sizes = [...new Set(this.sizes)];
  }

  private CollectAllCollors() {
    this.products.forEach((c) => {
      if (c.color.length !== 0) {
        c.color.forEach((e) => {
          if (!this.colors.includes(this.toCaptial(e.trim()))) {
            this.colors.push(this.toCaptial(e.trim()));
          }
        });
      }
    });
  }

  toCaptial(text: string): string {
    return text?.charAt(0).toUpperCase() + text.slice(1);
  }

  private creatCheckBoxsHandrlar(form: FormArray, arr: any) {

    arr.forEach(() => {
      form.push(new FormControl(false));
    });
  }

  restFilteration(){
    this.brandsArray.clear();
    this.sizesArray.clear();
    this.colors=[];
    this.brands=[];
    this.sizes=[];
  }

  filterByColors(colorSelected) {
    let filterResult: ProductModel[] = [];
    this.initAllProducts.forEach((product) => {

      product.color.forEach((clor) => {
        if (this.toCaptial(clor.trim()) == colorSelected) {
          filterResult.push(product);
        }
      });
    });
    if(filterResult.length !== 0){
      this.filter.emit([...filterResult]);
    }else{
      this.filter.emit([...this.initAllProducts])
    }

  }

  filterByBrands() {
    let brandsFormData = this.formbrand.value.brand;
    let brandsChecked: string[] = [];
    (brandsFormData as []).forEach((ele, i) => {
      if (ele == true) {
        brandsChecked.push(this.brands[i]);
      }
    });

    let filterResult: ProductModel[] = [];
    if (brandsChecked.length !== 0) {
      brandsChecked.forEach((brand) => {
        let res = this.initAllProducts.filter((prduct) => {
          return prduct.brand.toLowerCase().trim() == brand;
        });

        filterResult = filterResult.concat(res);
      });

      filterResult = [...new Set(filterResult)];

      this.filter.emit([...filterResult]);
    } else {
      this.filter.emit([...this.initAllProducts]);
    }
  }

  filterBySizes() {
    let sizesFormData = this.formSize.value.arrSizes as [];
    let sizesChecked: string[] = [];
    let filterSize: ProductModel[] = [];

    sizesFormData.forEach((ele, i) => {
      if (ele == true) {
        sizesChecked.push(this.sizes[i]);
      }
    });

    if (sizesChecked.length !== 0) {
      sizesChecked.forEach((selectedSize) => {
        this.initAllProducts.forEach((product) => {
          let sizesOfProduct = product.size.split(',');
          sizesOfProduct.forEach((s) => {
            if (s.toLowerCase().trim() == selectedSize) {
              filterSize.push(product);
            }
          });
        });
      });

        filterSize= [... new Set(filterSize)];
      this.filter.emit([...filterSize]);
    } else {
      this.filter.emit([...this.initAllProducts]);
    }
  }

  filterByRating(rate:number){
    let filterResult=this.initAllProducts.filter((r)=>{
      return r.rating >= rate;

    })
    if(filterResult.length != 0){
      this.filter.emit([...filterResult]);

    }else{
      this.filter.emit([...this.initAllProducts])
    }

  }

  getMinPrice(){

    this.minprice=this.products[0].price;
    this.products.forEach((p)=>{
      if(this.minprice > p.price){
        this.minprice=p.price;
      }
    })
    this.minPriceControl.setValue(this.minprice);
  }


  getMaxPrice(){

    this.products.forEach((p)=>{
      if(this.maxpricr < p.price){
        this.maxpricr=p.price;
      }
    })
    this.maxPriceControl.setValue(this.maxpricr);
  }

  filterByPrice(){
    if(this.maxPriceControl.invalid && this.minPriceControl.invalid)
    {
      return;
    }
    if(this.maxPriceControl.value < this.minPriceControl.value){
      this.maxPriceControl.setErrors({incorrect:true});
      this.minPriceControl.setErrors({incorrect:true});
    }
    let filterResult= this.initAllProducts.filter((pro)=>{
      return  pro.price >=  this.minPriceControl.value&& pro.price <= this.maxPriceControl.value ;

    })
    if(filterResult.length != 0){
      this.filter.emit([...filterResult])
    }else{
      this.filter.emit([...this.initAllProducts])
    }

  }
}
