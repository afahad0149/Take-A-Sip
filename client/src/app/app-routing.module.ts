import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { ListComponent } from './components/list/list.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/authGuard/auth.guard';
import { AdminGuard } from './services/adminGuard/admin.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'kitchen',
    component: KitchenComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'food/:id', component: FoodPageComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderFormComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
