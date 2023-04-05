import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { NavbarComponent } from './home/navbar/navbar.component';

const routes: Routes = [
  { path: 'grocery-store', component: GroceryStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
