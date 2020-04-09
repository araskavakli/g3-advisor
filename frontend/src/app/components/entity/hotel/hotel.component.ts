import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HotelReview } from './../../../model/hotelReview';
import { ReviewService } from './../../../services/review.service';
import { City } from 'src/app/model/city';
import { Hotel } from 'src/app/model/hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  cityId: number;
  cityName: string;
  cities: City[];
  hotel: Hotel;
  hotels: Hotel[];
  hotelId: number;
  hotelReviews: HotelReview[];
  qualityOfSleepRating = 0;
  locationRating = 0;
  serviceRating = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: GetCityService,
              private entityService: EntityService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
      this.updateOverallRatingOnAddReview();
    });

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    const hotel = this.entityService.getHotelById(this.hotelId);
    const hotels = this.entityService.getHotels(this.cityId);
    const hotelReviews = this.reviewService.getReviewsOfHotel(this.hotelId);

    forkJoin([hotel, hotels, hotelReviews]).subscribe(data => {
      this.hotel = data[0];
      this.hotels = data[1];
      this.hotelReviews = data[2];
      this.calculateAverageFacilityRatings();
    }, error => this.router.navigate([`cities/${this.cityId}`]));
  }

  calculateAverageFacilityRatings(): void {
    for (const review of this.hotelReviews) {
      this.qualityOfSleepRating += review.qualityOfSleepRating / this.hotelReviews.length;
      this.locationRating += review.locationRating / this.hotelReviews.length;
      this.serviceRating += review.serviceRating / this.hotelReviews.length;
    }
  }

  updateOverallRatingOnAddReview(): void {
    this.entityService.getHotelById(this.hotelId).subscribe(hotel => this.hotel = hotel);
  }
}
