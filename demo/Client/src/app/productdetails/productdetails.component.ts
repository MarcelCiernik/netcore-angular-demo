import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: string;
  private sub: any;
  productDetails:ProductDetail;

  constructor(private route: ActivatedRoute,private service: UserService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'] // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.service.getProductDetails(this.id).subscribe(
     res => {
       this.productDetails = res;
       console.log(this.productDetails);
       console.log(this.productDetails.name);
     },
     err => {
       console.log(err);
     },
   );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}