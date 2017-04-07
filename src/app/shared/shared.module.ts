import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule
    ],

    declarations: [
        NavigationComponent,
        CustomFooterComponent
    ],
   

    exports: [
       NavigationComponent,
        CustomFooterComponent
    ]
})

export class SharedModule { }