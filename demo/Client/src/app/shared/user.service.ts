import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44327/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }


  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getProducts():Observable<ProductDetail[]> {
    return this.http.get<ProductDetail[]>(this.BaseURI + '/Product').pipe();
  }

  getProductDetails(id:string): Observable<ProductDetail> {
    let params = new  HttpParams().set('productId', id.toString())
    return this.http.get<ProductDetail>(this.BaseURI + '/Product/GetProductDetails',{params}).pipe(map(model=>{return model}));
  }

  placeOrder(order:OrderInfo) {
    return this.http.post(this.BaseURI + '/Order/PlaceOrder', order);
  }

  createProduct(newProduct:ProductDetail) {
    return this.http.post(this.BaseURI + '/Product/CreateProduct', newProduct);
  }
}
