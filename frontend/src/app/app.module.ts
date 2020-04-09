import { ReviewComponent } from './components/review/review.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from './components/city/city.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EntryFilterComponent } from './components/entry-filter/entry-filter.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { EntityCarouselComponent } from './components/entity-carousel/entity-carousel.component';
import { HotelListComponent } from './components/entity-list/hotel/carousel/hotel-list.component';
import { RestaurantListComponent } from './components/entity-list/restaurant/carousel/restaurant-list.component';
import { ActivityListComponent } from './components/entity-list/activity/carousel/activity-list.component';
import { SightseeingListComponent } from './components/entity-list/sightseeing/carousel/sightseeing-list.component';
import { HotelFullListComponent } from './components/entity-list/hotel/hotel-full-list/hotel-full-list.component';
import { RestaurantFullListComponent } from './components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component';
import { ActivityFullListComponent } from './components/entity-list/activity/activity-full-list/activity-full-list.component';
import { SightseeingFullListComponent } from './components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component';
import { HotelComponent } from './components/entity/hotel/hotel.component';
import { ActivityComponent } from './components/entity/activity/activity.component';
import { RestaurantComponent } from './components/entity/restaurant/restaurant.component';
import { SightseeingComponent } from './components/entity/sightseeing/sightseeing.component';
import { NgbRatingModule, NgbDatepickerModule  } from '@ng-bootstrap/ng-bootstrap';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { EntitySlideshowComponent } from './components/entity-slideshow/entity-slideshow.component';
import { PriceLevelComponent } from './components/price-level/price-level.component';
import { ReviewEditComponent } from './components/review-edit/review-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CityComponent,
    BreadcrumbComponent,
    CityListComponent,
    NavbarComponent,
    EntryFilterComponent,
    SubnavComponent,
    HotelListComponent,
    EntityCarouselComponent,
    RestaurantListComponent,
    ActivityListComponent,
    SightseeingListComponent,
    HotelFullListComponent,
    RestaurantFullListComponent,
    ActivityFullListComponent,
    SightseeingFullListComponent,
    HotelComponent,
    ActivityComponent,
    RestaurantComponent,
    SightseeingComponent,
    ReviewListComponent,
    EntitySlideshowComponent,
    ReviewComponent,
    PriceLevelComponent,
    ReviewEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbRatingModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
