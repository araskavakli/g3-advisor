import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Sightseeing } from 'src/app/model/sightseeing';
import { City } from 'src/app/model/city';
import { SightseeingReview } from 'src/app/model/sightseeingReview';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from 'src/app/services/entity.service';
import { GetCityService } from 'src/app/services/get-city.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-sightseeing',
  templateUrl: './sightseeing.component.html',
  styleUrls: ['./sightseeing.component.css']
})
export class SightseeingComponent implements OnInit {

  cityId: number;
  cityName: string;
  cities: City[];
  sightseeing: Sightseeing;
  sightseeings: Sightseeing[];
  sightseeingId: number;
  sightseeingReviews: SightseeingReview[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: GetCityService,
              private entityService: EntityService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.sightseeingId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
      this.updateOverallRatingOnAddReview();
    });

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    const sightseeing = this.entityService.getSightseeingById(this.sightseeingId);
    const sightseeings = this.entityService.getSightseeings(this.cityId);
    const sightseeingReviews = this.reviewService.getReviewsOfSightseeing(this.sightseeingId);

    forkJoin([sightseeing, sightseeings, sightseeingReviews]).subscribe(data => {
      this.sightseeing = data[0];
      this.sightseeings = data[1];
      this.sightseeingReviews = data[2];
    }, error => this.router.navigate([`cities/${this.cityId}`]));
  }

  updateOverallRatingOnAddReview(): void {
    this.entityService.getSightseeingById(this.sightseeingId).subscribe(sightseeing => this.sightseeing = sightseeing);
  }

}
