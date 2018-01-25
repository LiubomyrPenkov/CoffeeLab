import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class Router{}