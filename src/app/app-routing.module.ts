import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExtraComponent } from './extra/extra.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HealthANDbeautyComponent } from './health-andbeauty/health-andbeauty.component';
// import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PhonesANDtabletsComponent } from './phones-andtablets/phones-andtablets.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch: "full"},
  {path:"home",component:FrontPageComponent},
  {path:"product-page",component:ProductPageComponent},
  {path:"product-card",component:ProductCardComponent},
  {path:"cart-page",component:CartPageComponent},
  {path:"order-page",component:OrderPageComponent},
  {path:"health&beauty",component:HealthANDbeautyComponent},
  {path:"phones&tablets",component:PhonesANDtabletsComponent},
  {path:"phones&t",component:PhonesANDtabletsComponent},
  {path:"ojapayment",component:PaymentGatewayComponent},
  {path:"drinks",component:DrinksComponent},
  {path:"phones&tablets",component:PhonesANDtabletsComponent},
  {path:"result",component:SearchResultComponent},
  {path: "extra", component:ExtraComponent},
  // {path:"account-page",component:AccountPageComponent, children:[
  //   {path:"", redirectTo:"login",pathMatch: "full"},
  //   {path:"login",component:LoginComponent},
  //   {path:"signup",component:SignupComponent},
  // ]},
  // {path:"flash-sales",component:FlashSalesComponent},
  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
