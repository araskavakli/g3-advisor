import { EntitySlideShowImageUrls } from './../../assets/entitySlideshowImageUrls';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../model/hotel';
import { Restaurant } from '../model/restaurant';
import { Activity } from '../model/activity';
import { Sightseeing } from '../model/sightseeing';
import { EntityImageUrls } from 'src/assets/entityImageUrls';

const apiRoot = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  entityImageUrls: any;
  entitySlideshowImageUrls: any;

  constructor(private http: HttpClient) {
              const entityImageUrls = new EntityImageUrls();
              this.entityImageUrls = entityImageUrls;

              const entitySlideshowImageUrls = new EntitySlideShowImageUrls();
              this.entitySlideshowImageUrls = entitySlideshowImageUrls;
  }

  getHotels(cityId: number): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${apiRoot}/hotels/?cityId=${cityId}`);
  }

  getHotelById(hotelId: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${apiRoot}/hotels/${hotelId}`);
  }

  getRestaurants(cityId: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${apiRoot}/restaurants/?cityId=${cityId}`);
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${apiRoot}/restaurants/${restaurantId}`);
  }

  getActivities(cityId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${apiRoot}/activities/?cityId=${cityId}`);
  }

  getActivityById(activityId: number): Observable<Activity> {
    return this.http.get<Activity>(`${apiRoot}/activities/${activityId}`);
  }

  getSightseeings(cityId: number): Observable<Sightseeing[]> {
    return this.http.get<[Sightseeing]>(`${apiRoot}/sightseeings/?cityId=${cityId}`);
  }

  getSightseeingById(sightseeingId: number): Observable<Sightseeing> {
    return this.http.get<Sightseeing>(`${apiRoot}/sightseeings/${sightseeingId}`);
  }

}
