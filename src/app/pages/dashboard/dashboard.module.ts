import { DashboardRoutingModule } from './dashboard.routing';
import { PrimengModule } from './../../primeng.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        PrimengModule,
        DashboardRoutingModule
    ],
    exports: []
})

export class DashboardModule {}
