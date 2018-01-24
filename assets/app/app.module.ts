import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { ProductItem } from './mainPage/product-item.component';
import { ProductList } from './mainPage/product-list.component';
import { ProductsService } from './mainPage/products.service';
import { MainPageComponent } from './mainPage/main-page.component';

const routes:Routes = [
    { 
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path:"products",
        component: MainPageComponent
    }
]
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
        RouterModule.forRoot(routes)
    ],
    providers: [
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}