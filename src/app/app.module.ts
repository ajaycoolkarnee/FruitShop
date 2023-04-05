import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { RegularDisplayComponent } from './Products/regular-display/regular-display.component';
import { GroceryStoreComponent } from './grocery-store/grocery-store.component';
import { FooterComponent } from './home/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegularDisplayComponent,
    FooterComponent,
    GroceryStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
