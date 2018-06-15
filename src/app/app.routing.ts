import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { ZestimateComponent } from './zestimate/zestimate.component';
import { RentComponent } from './rent/rent.component';

const appRoutes: Routes = [
  {
     path: '',
     component: SellComponent
   },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'rent',
    component: RentComponent
  },
  {
    path: 'zestimate',
    component: ZestimateComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
