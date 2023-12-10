import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgmButtonModule, NgmModule } from '@ngm/ngm';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgmButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
