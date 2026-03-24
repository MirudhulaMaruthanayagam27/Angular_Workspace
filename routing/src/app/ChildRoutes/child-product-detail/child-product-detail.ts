import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child-product-detail',
  imports: [RouterOutlet],
  templateUrl: './child-product-detail.html',
  styleUrl: './child-product-detail.css',
})
export class ChildProductDetail {
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goReviews() {
    this.router.navigate(['reviews'], { relativeTo: this.route });
  }
}
