import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-child-product-detail2',
  imports: [RouterOutlet],
  templateUrl: './child-product-detail2.html',
  styleUrl: './child-product-detail2.css',
})
export class ChildProductDetail2 {

  id:any;
  product:any;

  products=[
    { id: 101, name: 'iPhone', price: 80000, image: 'iPhone Image' },
    { id: 102, name: 'Samsung', price: 60000, image: 'Samsung Image' },
    { id: 103, name: 'OnePlus', price: 50000, image: 'OnePlus Image' }
  ];


  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.product = this.products.find(p => p.id == this.id);
});
}

  //Relative to remembers =the current url+review else directly it goes to review-not specified
  reviews(){
    this.router.navigate(['review2'], { relativeTo: this.route });
  }

  goback(){
    this.router.navigate(['/child-products2']);
  }

}
