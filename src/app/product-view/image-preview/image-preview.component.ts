import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {

  scrImg:any;

  constructor(
    private cd:ChangeDetectorRef
  ) {


   }
 @Input('imgs') imgProduct:string[]=[];
 formatedImages




  ngOnInit(): void {
    this.scrImg =this.imgProduct[0];
    this.formatedImages = this.imgProduct.map((e)=>{
      return {

          image: e,
          thumbImage:e,
          alt: '-',

      }

    })
    console.log(this.formatedImages);
  }


  showImg(index){
    this.scrImg=this.formatedImages[index].image;
    this.cd.detectChanges()

  }

  plusQuantiti(){

  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 7
      },
      576:{
        items:7
      },
      740: {
        items:8
      },
      940: {
        items: 9
      }
    },
    nav: false,
  }

}
