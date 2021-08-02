import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {AngularPaystackModule } from 'angular-paystack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { TrendingNowComponent } from './trending-now/trending-now.component';
import { TrendingNowCompComponent } from './trending-now-comp/trending-now-comp.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PhonesANDtabletsComponent } from './phones-andtablets/phones-andtablets.component';
import { HealthANDbeautyComponent } from './health-andbeauty/health-andbeauty.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { Banner1Component } from './banner1/banner1.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExtraComponent } from './extra/extra.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    FooterComponent,
    FlashSalesComponent,
    FrontPageComponent,
    CarouselComponent,
    CategoryComponentComponent,
    TrendingNowComponent,
    TrendingNowCompComponent,
    ProductPageComponent,
    ProductCardComponent,
    CartPageComponent,
    SearchResultComponent,
    WomenComponent,
    MenComponent,
    ElectronicsComponent,
    PhonesANDtabletsComponent,
    HealthANDbeautyComponent,
    OrderPageComponent,
    PaymentGatewayComponent,
    AccountPageComponent,
    LoginComponent,
    SignupComponent,
    FeaturedProductsComponent,
    Banner1Component,
    DrinksComponent,
    ErrorPageComponent,
    ExtraComponent,
// AngularPaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxx')
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    // AngularPaystackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
