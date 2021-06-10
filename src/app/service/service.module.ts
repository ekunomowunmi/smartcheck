import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { SharedModule } from '../shared/shared.module';
import { ServertableComponent } from '../servertable/servertable.component';


@NgModule({
  declarations: [ServiceComponent, ServertableComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    SharedModule
  ]
})
export class ServiceModule { }
