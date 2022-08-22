import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { ProductsComponent } from './features/sell/components/products/products.component';
import { DetailsPageComponent } from './features/sell/pages/sell-page/details-page/details-page.component';
import { TaskslistComponent } from './features/tasks/components/taskslist/taskslist.component';

const routes: Routes = [
  { path: '', redirectTo: '/sell', pathMatch: 'full' },
  { path: 'tasks', component: TaskslistComponent},
  { path: 'sell', component: ProductsComponent},
  { path: 'product-details/:productId', component: DetailsPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
