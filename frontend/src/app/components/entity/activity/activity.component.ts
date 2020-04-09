import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { City } from 'src/app/model/city';
import { Activity } from 'src/app/model/activity';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';
import { ReviewService } from 'src/app/services/review.service';
import { ActivityReview } from 'src/app/model/activityReview';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  cityId: number;
  cityName: string;
  cities: City[];
  activity: Activity;
  activities: Activity[];
  activityId: number;
  activityReviews: ActivityReview[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: GetCityService,
              private entityService: EntityService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.activityId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
      this.updateOverallRatingOnAddReview();
    });

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    const activity = this.entityService.getActivityById(this.activityId);
    const activities = this.entityService.getActivities(this.cityId);
    const activityReviews = this.reviewService.getReviewsOfActivity(this.activityId);

    forkJoin([activity, activities, activityReviews]).subscribe(data => {
      this.activity = data[0];
      this.activities = data[1];
      this.activityReviews = data[2];
    }, error => this.router.navigate([`cities/${this.cityId}`]));
  }

  updateOverallRatingOnAddReview(): void {
    this.entityService.getActivityById(this.activityId).subscribe(activity => this.activity = activity);
  }
}
