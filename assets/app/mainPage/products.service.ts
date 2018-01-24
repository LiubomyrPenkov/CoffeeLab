import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService{
    constructor(public http: HttpClient){}

    getProducts(){
        return this.http.get('/product');
    }
}