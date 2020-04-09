import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { City } from 'src/app/model/city';
import { Restaurant } from 'src/app/model/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';
import { ReviewService } from 'src/app/services/review.service';
import { RestaurantReview } from 'src/app/model/restaurantReview';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  cityId: number;
  cityName: string;
  cities: City[];
  restaurant: Restaurant;
  restaurants: Restaurant[];
  restaurantId: number;
  restaurantReviews: RestaurantReview[];
  foodRating = 0;
  valueForMoneyRating = 0;
  serviceRating = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: GetCityService,
              private entityService: EntityService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
      this.updateOverallRatingOnAddReview();
    });

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    const restaurant = this.entityService.getRestaurantById(this.restaurantId);
    const restaurants = this.entityService.getRestaurants(this.cityId);
    const restaurantReviews = this.reviewService.getReviewsOfRestaurant(this.restaurantId);

    forkJoin([restaurant, restaurants, restaurantReviews]).subscribe(data => {
      this.restaurant = data[0];
      this.restaurants = data[1];
      this.restaurantReviews = data[2];
      this.calculateAverageFacilityRatings();
    }, error => this.router.navigate([`cities/${this.cityId}`]));
  }

  calculateAverageFacilityRatings(): void {
    const reviewArraySize = this.restaurantReviews.length;
    for (const review of this.restaurantReviews) {
      this.foodRating += review.foodRating / reviewArraySize;
      this.valueForMoneyRating += review.valueForMoneyRating / reviewArraySize;
      this.serviceRating += review.serviceRating / reviewArraySize;
    }
  }

  updateOverallRatingOnAddReview(): void {
    this.entityService.getRestaurantById(this.restaurantId).subscribe(restaurant => this.restaurant = restaurant);
  }
}
