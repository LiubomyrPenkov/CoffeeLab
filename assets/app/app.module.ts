import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router } from './route.module'; 

import { AppComponent } from "./app.component";
import { ProductItem } from './mainPage/product-item.component';
import { ProductList } from './mainPage/product-list.component';
import { ProductsService } from './mainPage/products.service';
import { MainPageComponent } from './mainPage/main-page.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductItem,
        ProductList,
        MainPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        Router
    ],
    providers: [
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}