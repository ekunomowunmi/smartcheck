import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {ButtonsModule, CardsModule, IconsModule, ModalModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import { SharedModule } from './shared/shared.module';
import { HomeTableComponent } from './home-table/home-table.component';
import { ModalComponent } from './modal/modal.component';
import { ServertableComponent } from './servertable/servertable.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    // HomeTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot()

  ],
  entryComponents:[ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
