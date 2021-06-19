import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  initAllProducts:ProductModel[]=[]
  @Output('myfilteration') filter = new EventEmitter<ProductModel[]>();
  @Input('products') products : ProductModel[] = [];
  brands: string[] = [];
  formbrand: FormGroup;
  formSize: FormGroup;

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
    this.collectAllBrands();
    this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

    this.collectAllSizes();
    this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);
       console.log("brands",this.brandsArray);
       console.log("sizes",this.sizesArray);


    this.CollectAllCollors();
    console.log('from Filter');

    this.productServices.getProductsWithoutLoad().subscribe((p)=>{


      console.log("prodctar",p);

      this.products=p;
      this.restFilteration();
      this.collectAllBrands();
      this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

      this.collectAllSizes();
      this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);
         console.log("brands",this.brandsArray);
         console.log("sizes",this.sizesArray);


      this.CollectAllCollors();

    });

  //  if(this.subCategoryId !== null){
  //   this.subcategory.getProductByCategory(this.subCategoryId).subscribe((data:any)=>{

  //     console.log("yarab",data);

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
    console.log(this.brands);
  }



  private collectAllSizes() {
    this.products.forEach((s) => {


      if (s.size !== null && s.size.trim() != '' && s.size !== undefined) {
        let sizeArr = s.size.split(',');
        sizeArr.forEach((siz) => {
          if (siz.trim() != "") {
            this.sizes.push(siz.toLowerCase().trim());
          }
        });
      }
    });
    this.sizes = [...new Set(this.sizes)];
    console.log(this.sizes);
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
    console.log(this.colors);
  }

  toCaptial(text: string): string {
    return text?.charAt(0).toUpperCase() + text.slice(1);
  }

  private creatCheckBoxsHandrlar(form: FormArray, arr: any) {
    console.log(form);

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
      console.log(product);

      product.color.forEach((clor) => {
        if (this.toCaptial(clor.trim()) == colorSelected) {
          // console.log('if', clor == colorSelected);
          // console.log('color choose', colorSelected);
          // console.log('color', clor);
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
    console.log(rate);
    let filterResult=this.initAllProducts.filter((r)=>{
      return r.rating >= rate;

    })
    if(filterResult.length != 0){
      this.filter.emit([...filterResult]);
      console.log("sucess",[...filterResult]);

    }else{
      this.filter.emit([...this.initAllProducts])
      console.log("faild",[...this.initAllProducts]);
    }


  }
}
