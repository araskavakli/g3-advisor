import { Component, OnInit, Input } from '@angular/core';
import { SightseeingReview } from 'src/app/model/sightseeingReview';
import { RestaurantReview } from 'src/app/model/restaurantReview';
import { ActivityReview } from 'src/app/model/activityReview';
import { HotelReview } from 'src/app/model/hotelReview';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css'],
})
export class ReviewEditComponent implements OnInit {

  reviewInput: any;

  @Input()
  entityType: string;

  @Input()
  headline: string;

  generalRating = 0;
  serviceRating = 0;
  locationRating = 0;
  qualityOfSleepRating = 0;
  foodRating = 0;
  valueForMoneyRating = 0;

  localDate = new Date();

  reviewForm: FormGroup;

  entityId: number;
  submitted = true;

  constructor(
    private hotelReviewFormBuilder: FormBuilder,
    private activityReviewFormBuilder: FormBuilder,
    private sightseeingReviewFormBuilder: FormBuilder,
    private restaurantReviewFormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.reviewService.getReviewToEdit().subscribe(review => {
      this.reviewInput = review;
      if (this.entityType === 'hotels') {
        this.reloadHotelReviewForm(review);
      } else if (this.entityType === 'restaurants') {
        this.reloadRestaurantReviewForm(review);
      } else if (this.entityType === 'activities') {
        this.reloadActivityReviewForm(review);
      } else if (this.entityType === 'sightseeing') {
        this.reloadSightseeingReviewForm(review);
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.editReview();
  }

  editReview() {
    if (this.entityType === 'hotels') {

      this.reviewService.editHotelReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'restaurants') {

      this.reviewService.editRestaurantReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'activities') {

      this.reviewService.editActivityReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'sightseeing') {

      this.reviewService.editSightSeeingReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
    }
  }

  reloadHotelReviewForm(hotelReview: HotelReview) {
    this.reviewForm = this.hotelReviewFormBuilder.group({
      title: [hotelReview.title, Validators.required],
      reviewText: [hotelReview.reviewText, Validators.required],
      author: [hotelReview.author, Validators.required],
      visitingDate: [hotelReview.visitingDate, Validators.required],
      reviewCreationDate: [hotelReview.reviewCreationDate, Validators.required],
      rating: [hotelReview.rating, Validators.required],
      serviceRating: [hotelReview.serviceRating, Validators.required],
      locationRating: [hotelReview.locationRating, Validators.required],
      qualityOfSleepRating: [hotelReview.qualityOfSleepRating, Validators.required],
    });
  }

  reloadRestaurantReviewForm(restaurantReview: RestaurantReview) {
    this.reviewForm = this.restaurantReviewFormBuilder.group({
      title: [restaurantReview.title, Validators.required],
      reviewText: [restaurantReview.reviewText, Validators.required],
      author: [restaurantReview.author, Validators.required],
      visitingDate: [restaurantReview.visitingDate, Validators.required],
      reviewCreationDate: [restaurantReview.reviewCreationDate, Validators.required],
      rating: [restaurantReview.rating, Validators.required],
      serviceRating: [restaurantReview.serviceRating, Validators.required],
      foodRating: [restaurantReview.foodRating, Validators.required],
      valueForMoneyRating: [restaurantReview.valueForMoneyRating, Validators.required],
    });
  }

  reloadActivityReviewForm(activityReview: ActivityReview) {
    this.reviewForm = this.activityReviewFormBuilder.group({
      title: [activityReview.title, Validators.required],
      reviewText: [activityReview.reviewText, Validators.required],
      author: [activityReview.author, Validators.required],
      visitingDate: [activityReview.visitingDate, Validators.required],
      reviewCreationDate: [activityReview.reviewCreationDate, Validators.required],
      rating: [activityReview.rating, Validators.required],
    });
  }

  reloadSightseeingReviewForm(sightseeingReview: SightseeingReview) {
    this.reviewForm = this.sightseeingReviewFormBuilder.group({
      title: [sightseeingReview.title, Validators.required],
      reviewText: [sightseeingReview.reviewText, Validators.required],
      author: [sightseeingReview.author, Validators.required],
      visitingDate: [sightseeingReview.visitingDate, Validators.required],
      reviewCreationDate: [sightseeingReview.reviewCreationDate, Validators.required],
      rating: [sightseeingReview.rating, Validators.required],
    });
  }

}
