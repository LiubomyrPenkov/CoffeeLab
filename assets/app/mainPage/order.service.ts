export class OrderService{

    private order: Object = {};

    addOrder(value, size, name){
        if(!this.order[name]){
            this.order[name] = {};
        }
        this.order[name][size] = value;
    }
    deleteOrder(size, name){
        if(this.order[name] && this.order[name][size]){
            delete this.order[name][size];
            if(!Object.keys(this.order[name]).length){
                delete this.order[name];
            }
        }
        
    }
    getOrder(){
        return this.order;
    }
    checkOrder(name){
        return !!this.order[name];
    }
}