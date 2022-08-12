import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsinitialComponent } from './pages/productsinitial/productsinitial.component';
import { DetailsPageComponent } from './pages/sell-page/details-page/details-page.component';



@NgModule({
  declarations: [
  ProductsComponent,
  ProductsinitialComponent,
  DetailsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductsComponent,
    ProductsinitialComponent,
    DetailsPageComponent
  ]
})
export class SellModule { } 
