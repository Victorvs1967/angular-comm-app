import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { WidgetsHeaderComponent } from './components/widgets-header/widgets-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DownloadDemoComponent } from './components/download-demo/download-demo.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerQuoteComponent } from './components/banner-quote/banner-quote.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { TradeServicesComponent } from './components/trade-services/trade-services.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { RequestQuotationComponent } from './components/request-quotation/request-quotation.component';
import { RegionsListComponent } from './components/regions-list/regions-list.component';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { PopularCategoryComponent } from './components/popular-category/popular-category.component';
import { LargeBannerComponent } from './components/large-banner/large-banner.component';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { HomeCategoryListComponent } from './components/home-category-list/home-category-list.component';
import { HomeCategoryBannerComponent } from './components/home-category-banner/home-category-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    WidgetsHeaderComponent,
    NavBarComponent,
    MenuCategoryComponent,
    ProductsListComponent,
    DownloadDemoComponent,
    FooterComponent,
    BannerQuoteComponent,
    CarouselSliderComponent,
    TradeServicesComponent,
    SubscribeFormComponent,
    RequestQuotationComponent,
    RegionsListComponent,
    RecommendedItemsComponent,
    QuoteFormComponent,
    PopularCategoryComponent,
    LargeBannerComponent,
    HomeCategoryComponent,
    HomeCategoryListComponent,
    HomeCategoryBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
