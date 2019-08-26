import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminBatchesModule } from './admin-batches/admin-batches.module';
import { CustomerBatchesModule } from './batches/batches.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerBatchesModule,
    AdminBatchesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
