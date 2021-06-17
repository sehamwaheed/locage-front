import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/Models/ProductModel';
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
  products: ProductModel[] = [];
  @Output('myfilteration') filter = new EventEmitter<ProductModel[]>();
  @Input('subCategoryId') subCategoryId:any=null;
  brands: string[] = [];
  formbrand: FormGroup;
  formSize: FormGroup;

  constructor(fb: FormBuilder, private productServices: ProductService,private subcategory:SubCategoryService) {
    this.formbrand = fb.group({
      brand: fb.array([]),
    });

    this.formSize = fb.group({
      arrSizes: fb.array([]),
    });
  }

  ngOnInit(): void {

   if(this.subCategoryId !== null){
    this.subcategory.getProductByCategory(this.subCategoryId).subscribe((data:any)=>{

      console.log("yarab",data);

      this.products=data?.result?.docs;
      this.collectAllBrands();
      this.creatCheckBoxsHandrlar(this.brandsArray, this.brands);

      this.collectAllSizes();
      this.creatCheckBoxsHandrlar(this.sizesArray, this.sizes);

      this.CollectAllCollors();

    })

   }else{

   }

  //  this.productServices.getProductsWithoutLoad().subscribe((p)=>{
  //      this.products=p;
  //  })

  }

  rating: number;
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


      if (s.size !== null && s.size !== '' && s.size !== undefined) {
        let sizeArr = s.size.split(',');
        sizeArr.forEach((siz) => {
          this.sizes.push(siz.toLowerCase().trim());
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

  filterByColors(colorSelected) {
    let filterResult: ProductModel[] = [];
    this.products.forEach((product) => {
      console.log(product);

      product.color.forEach((clor) => {
        if (this.toCaptial(clor.trim()) == colorSelected) {
          console.log('if', clor == colorSelected);
          console.log('color choose', colorSelected);
          console.log('color', clor);
          filterResult.push(product);
        }
      });
    });
    this.filter.emit([...filterResult]);
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
        let res = this.products.filter((prduct) => {
          return prduct.brand.toLowerCase().trim() == brand;
        });

        filterResult = filterResult.concat(res);
      });

      filterResult = [...new Set(filterResult)];

      this.filter.emit(filterResult);
    } else {
      this.filter.emit(this.products);
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
        this.products.forEach((product) => {
          let sizesOfProduct = product.size.split(',');
          sizesOfProduct.forEach((s) => {
            if (s.toLowerCase().trim() == selectedSize) {
              filterSize.push(product);
            }
          });
        });
      });

        filterSize= [... new Set(filterSize)];
      this.filter.emit(filterSize);
    } else {
      this.filter.emit(this.products);
    }
  }
}
