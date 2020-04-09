import { RestaurantReview } from './../model/restaurantReview';
import { SightseeingReview } from '../model/sightseeingReview';
import { ActivityReview } from './../model/activityReview';
import { HotelReview } from 'src/app/model/hotelReview';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

const apiRoot = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewToEdit = new ReplaySubject<any>(1);
  refreshReviews = new ReplaySubject<string>(1);

  constructor(private http: HttpClient) { }

  setReviewToEdit(review: any): void {
    this.reviewToEdit.next(review);
  }

  getReviewToEdit(): Observable<any> {
    return this.reviewToEdit.asObservable();
  }

  triggerRefreshReviews(): void {
    this.refreshReviews.next('refresh');
  }

  listenToTriggerRefreshReviews(): Observable<any> {
    return this.refreshReviews.asObservable();
  }

  addHotelReview(hotelReview: HotelReview, id: number): Observable<HotelReview> {
    return this.http.post<HotelReview>(`${apiRoot}/hotels/${id}/reviews`, hotelReview);
  }

  addActivityReview(activityReview: ActivityReview, id: number): Observable<ActivityReview> {
    return this.http.post<ActivityReview>(`${apiRoot}/activities/${id}/reviews`, activityReview);
  }

  addSightseeingReview(sightseeingReview: SightseeingReview, id: number): Observable<SightseeingReview> {
    return this.http.post<SightseeingReview>(`${apiRoot}/sightseeings/${id}/reviews`, sightseeingReview);
  }

  addRestaurantReview(restaurantReview: RestaurantReview, id: number): Observable<RestaurantReview> {
    return this.http.post<RestaurantReview>(`${apiRoot}/restaurants/${id}/reviews`, restaurantReview);
  }

  editHotelReview(hotelReview: HotelReview, id: number, hotelReviewId: number) {
    return this.http.put(`${apiRoot}/hotels/${id}/edit/reviews/?hotelReviewId=${hotelReviewId}`, hotelReview);
  }

  editRestaurantReview(restaurantReview: RestaurantReview, id: number, restaurantReviewId: number) {
    return this.http.put(`${apiRoot}/restaurants/${id}/edit/reviews/?restaurantReviewId=${restaurantReviewId}`, restaurantReview);
  }

  editActivityReview(activityReview: ActivityReview, id: number, activityReviewId: number) {
    return this.http.put(`${apiRoot}/activities/${id}/edit/reviews/?activityReviewId=${activityReviewId}`, activityReview);
  }

  editSightSeeingReview(sightseeingReview: SightseeingReview, id: number, sightseeingReviewId: number) {
    return this.http.put(`${apiRoot}/sightseeings/${id}/edit/reviews/?sightseeingReviewId=${sightseeingReviewId}`, sightseeingReview);
  }

  getReviewsOfHotel(hotelId: number): Observable<HotelReview[]> {
    return this.http.get<HotelReview[]>(`${apiRoot}/reviews/hotels/?hotelId=${hotelId}`);
  }

  getReviewsOfActivity(activityId: number): Observable<ActivityReview[]> {
    return this.http.get<ActivityReview[]>(`${apiRoot}/reviews/activities/?activityId=${activityId}`);
  }

  getReviewsOfSightseeing(sightseeingId: number): Observable<SightseeingReview[]> {
    return this.http.get<SightseeingReview[]>(`${apiRoot}/reviews/sightseeings/?sightseeingId=${sightseeingId}`);
  }

  getReviewsOfRestaurant(restaurantId: number): Observable<RestaurantReview[]> {
    return this.http.get<RestaurantReview[]>(`${apiRoot}/reviews/restaurants/?restaurantId=${restaurantId}`);
  }

  deleteHotelReviewById(reviewId: number): Observable<any> {
    return this.http.delete<any>(`${apiRoot}/reviews/hotels/delete/${reviewId}`);
  }

  deleteRestaurantReviewById(reviewId: number): Observable<any> {
    return this.http.delete<any>(`${apiRoot}/reviews/restaurants/delete/${reviewId}`);
  }

  deleteActivityReviewById(reviewId: number): Observable<any> {
    return this.http.delete<any>(`${apiRoot}/reviews/activities/delete/${reviewId}`);
  }

  deleteSightseeingReviewById(reviewId: number): Observable<any> {
    return this.http.delete<any>(`${apiRoot}/reviews/sightseeings/delete/${reviewId}`);
  }

}
