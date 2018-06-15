import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { ZestimateComponent } from './zestimate/zestimate.component';
import { RentComponent } from './rent/rent.component';


@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    BuyComponent,
    ZestimateComponent,
    RentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
