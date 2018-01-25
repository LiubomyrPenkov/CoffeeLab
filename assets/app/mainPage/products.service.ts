import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductsService{
    constructor(public http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>('/product');
    }
}