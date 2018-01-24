import {Component} from '@angular/core';
import { ProductsService } from './products.service';
import { OrderService } from './order.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [OrderService]
})
export class ProductList{
    products: Array<Object>;

    constructor(
        private productsServise: ProductsService,
        private order: OrderService
    ){}

    ngOnInit(){
        this.productsServise.getProducts().subscribe(
            (data)=> this.products = data['data']
        )
    }
    submit(){
        alert("Your order:" + JSON.stringify(this.order.getOrder()));
    }
}