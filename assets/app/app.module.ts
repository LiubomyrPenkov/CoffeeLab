import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { ProductItem } from './products/product-item.component';
import { ProductList } from './products/product-list.component';

const routes:Routes = [
    { 
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path:"products",
        component: ProductList
    }
]
@NgModule({
    declarations: [
        AppComponent,
        ProductItem,
        ProductList
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}