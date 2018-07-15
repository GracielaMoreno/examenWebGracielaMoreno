import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
