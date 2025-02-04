import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { FoodsComponent } from './components/foods/foods.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { ListComponent } from './components/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:6789', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    FoodsComponent,
    NavbarComponent,
    FoodPageComponent,
    ListComponent,
    KitchenComponent,
    OrderFormComponent,
    LoginComponent,
    RegisterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
