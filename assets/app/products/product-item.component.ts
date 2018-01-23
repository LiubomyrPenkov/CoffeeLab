import { Component} from "@angular/core";


@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItem{
    name:String = 'Cappuccino';
    ingeredients:[Object] = ['coffee', 'milk'];
    prices:[Object] = [{size: 's', price: '25'},{size: 'm', price: '33'},{size: 'l', price: '40'}];
    selected:Boolean = false;
    order:Object = {};

    input(value, size, name){
        if(!value && this.order[name]){
            delete this.order[name][size];
            if(!Object.keys(this.order[name]).length){
                delete this.order[name];
                this.selected = false;
            }
        }else{
            this.order[name] = { 
                ...this.order[name],
                [size]: value
            }
            this.selected = true;
        }
    }
    click(input, size, name){
        input.value = '';
        this.input(input.value, size, name);
    }
}

