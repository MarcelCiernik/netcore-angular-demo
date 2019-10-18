import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
import { NewProductDetail } from './NewProductDetail';

@Component({
  selector: 'app-product-definition',
  templateUrl: './product-definition.component.html',
  styleUrls: ['./product-definition.component.css']
})
export class ProductDefinitionComponent implements OnInit {
  selectedName="Animal Category";
  Name:string;
  Description:string;
  Price:number;
  constructor(private toastr: ToastrService,private service: UserService) { }

  ngOnInit() {
  }

  SetCategory(item:string)
  {
    this.selectedName=item;
  }
  CreateProduct()
  {
    if(this.selectedName=="Animal Category")
    {
      this.toastr.error('Animal category not specified', 'Data missing');
    }
    else
    {
      this.service.createProduct(new NewProductDetail(this.selectedName,this.Name,this.Price,this.Description)).subscribe(
        res => {
          this.toastr.info('Product sucessfuly created!', 'Product created');
        },
        err => {
          console.log(err);
        },
      );
    }
  }
}
