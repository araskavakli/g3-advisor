import { RestaurantReview } from './../../model/restaurantReview';
import { ActivityReview } from './../../model/activityReview';
import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { HotelReview } from 'src/app/model/hotelReview';
import { SightseeingReview } from 'src/app/model/sightseeingReview';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input()
  reviews: HotelReview[] | ActivityReview[] | RestaurantReview[] | SightseeingReview[];

  entityId: number;
  entityType: string;
  showEditForm: boolean;

  constructor(private reviewService: ReviewService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.entityType = this.route.snapshot.url[2].path;
    this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
      this.reloadReviews(this.entityType);
    });
  }

  deleteReviewById(review: any): void {
    if (this.entityType === 'hotels') {

      this.reviewService.deleteHotelReviewById(review.id)
        .subscribe(() => this.reviewService.triggerRefreshReviews());

    } else if (this.entityType === 'restaurants') {

      this.reviewService.deleteRestaurantReviewById(review.id)
        .subscribe(() => this.reviewService.triggerRefreshReviews());

    } else if (this.entityType === 'activities') {

      this.reviewService.deleteActivityReviewById(review.id)
        .subscribe(() => this.reviewService.triggerRefreshReviews());

    } else if (this.entityType === 'sightseeing') {

      this.reviewService.deleteSightseeingReviewById(review.id)
        .subscribe(() => this.reviewService.triggerRefreshReviews());

    }
  }

  clickHandler(review: any): void {
    this.reviewService.setReviewToEdit(review);
  }

  reloadReviews(entityType: string): void {

    if (this.entityType === 'hotels') {
      this.reviewService.getReviewsOfHotel(this.entityId).subscribe(reviews => this.reviews = reviews);

    } else if (this.entityType === 'restaurants') {
      this.reviewService.getReviewsOfRestaurant(this.entityId).subscribe(reviews => this.reviews = reviews);

    } else if (this.entityType === 'activities') {
      this.reviewService.getReviewsOfActivity(this.entityId).subscribe(reviews => this.reviews = reviews);

    } else if (this.entityType === 'sightseeing') {
      this.reviewService.getReviewsOfSightseeing(this.entityId).subscribe(reviews => this.reviews = reviews);
    }

  }
}
