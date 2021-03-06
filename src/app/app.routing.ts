import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//  Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'signup', component: SignUpPageComponent },
    { path: 'cart', component: CartPageComponent },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);