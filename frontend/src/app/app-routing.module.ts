import { SightseeingComponent } from './components/entity/sightseeing/sightseeing.component';
import { ActivityComponent } from './components/entity/activity/activity.component';
import { RestaurantComponent } from './components/entity/restaurant/restaurant.component';
import { SightseeingFullListComponent } from './components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component';
import { RestaurantFullListComponent } from './components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component';
import { HotelFullListComponent } from './components/entity-list/hotel/hotel-full-list/hotel-full-list.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityFullListComponent } from './components/entity-list/activity/activity-full-list/activity-full-list.component';
import { HotelComponent } from './components/entity/hotel/hotel.component';


const routes: Routes = [
  {path: 'cities/:id/hotels/:idEntity', component: HotelComponent},
  {path: 'cities/:id/restaurants/:idEntity', component: RestaurantComponent},
  {path: 'cities/:id/activities/:idEntity', component: ActivityComponent},
  {path: 'cities/:id/sightseeing/:idEntity', component: SightseeingComponent},
  {path: 'cities/:id/hotels', component: HotelFullListComponent},
  {path: 'cities/:id/restaurants', component: RestaurantFullListComponent},
  {path: 'cities/:id/activities', component: ActivityFullListComponent},
  {path: 'cities/:id/sightseeing', component: SightseeingFullListComponent},
  {path: 'cities/:id', component: CityComponent},
  {path: 'cities', component: CityListComponent},
  {path: '', component: SearchBarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
