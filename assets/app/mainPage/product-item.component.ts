import { Component, Input } from "@angular/core";
import { OrderService } from "./order.service";
import { OnInit } from "@angular/core";


@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItem implements OnInit{
    selected:Boolean = false;
    name:String;

    @Input() public product:Object;

    constructor(public order: OrderService){};

    ngOnInit(){
        this.name = this.product['name'];
    }
    input(input, size){
        if(input.value == 0){
            this.click(input, size);
        }
        if(!input.value){
            this.click(input, size);
        }else{
            this.order.addOrder(input.value, size, this.name);
            this.selected = true;
        }
        
    }
    click(input, size){
        input.value = '';
        this.order.deleteOrder(size, this.name);
        this.selected = this.order.checkOrder(this.name);
    }
}

