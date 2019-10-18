import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NewProductDetail } from '../product-definition/NewProductDetail';

class Order implements OrderInfo
{
  productId: string;  
  amount: number;
  ItemPrice:number;

  constructor(productid:string,amount:number,itemprice:number)
  {
    this.productId=productid;
    this.amount=amount;
    this.ItemPrice=itemprice;
  }
}
class AmoutNewProductDetailModel
{
  id: string;
  name: string;
  price: number;
  amount:number;
  constructor( name: string, price: number,id:string) {
    this.name = name;
    this.price = price;
    this.id=id;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;
  NofItems:number;

  ProductList: AmoutNewProductDetailModel[]=[];

  headElements = [ 'Name', 'Price'];

  constructor(private router: Router, private service: UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(
      res => {
        res.forEach( (_, index) => {
          this.ProductList.push(new AmoutNewProductDetailModel(_.name,_.price,_.id))
        });
      },
      err => {
        console.log(err);
      },
    );
  }

  PlaceOrder(product :string, amount:number , itemprice:number)
  {
    if(amount==0||amount==undefined)
    {
      this.toastr.error('Incorrect number of items to order.', 'Specify number of items to order');
    }
    else
    {
      this.service.placeOrder(new Order(product,amount,itemprice)).subscribe(
        res => {
          this.toastr.info('Product sucessfuly created!', 'Product created #'+product);
        },
        err => {
          console.log(err);
        },
      );
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }


}
