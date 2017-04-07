import { NgModule } from '@angular/core';

import { jqxChartComponent } from '../../../node_modules/jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@NgModule({

    declarations: [jqxChartComponent],
    exports: [jqxChartComponent]
})

export class SharedJQWModule { }