import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {BadgeModule, ButtonsModule, CardsModule, CheckboxModule, IconsModule, ModalModule, NavbarModule, TableModule, WavesModule} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    WavesModule,
    CardsModule,
    BadgeModule,
    FormsModule,
    TableModule,
    ModalModule,
    CheckboxModule

  ]
})
export class SharedModule { }
