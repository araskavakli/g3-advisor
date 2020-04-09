import { ReviewService } from '../../services/review.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {

  @Input()
  entityType: string;

  @Input()
  headline: string;

  buttonName = 'Leave Review';

  generalRating = 0;
  serviceRating = 0;
  locationRating = 0;
  qualityOfSleepRating = 0;
  foodRating = 0;
  valueForMoneyRating = 0;

  localDate = new Date();

  reviewForm: FormGroup;

  entityId: number;
  submitted = false;

  constructor(
    private hotelReviewFormBuilder: FormBuilder,
    private activityReviewFormBuilder: FormBuilder,
    private sightseeingReviewFormBuilder: FormBuilder,
    private restaurantReviewFormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {

    this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
    this.loadForm();

  }

  onSubmit(): void {
    if (this.reviewForm.invalid) {
      return;
  }
    this.saveReview();
    this.loadForm();
  }

  get f() { return this.reviewForm.controls;
  }

  saveReview() {
    if (this.entityType === 'hotels') {

      this.reviewService.addHotelReview(this.reviewForm.value, this.entityId)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'restaurants') {

      this.reviewService.addRestaurantReview(this.reviewForm.value, this.entityId)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'activities') {

      this.reviewService.addActivityReview(this.reviewForm.value, this.entityId)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    } else if (this.entityType === 'sightseeings') {

      this.reviewService.addSightseeingReview(this.reviewForm.value, this.entityId)
                        .subscribe(() => this.reviewService.triggerRefreshReviews(),
                        error => alert('You have submitted a review with one or more invalid fields. Please try again.'));

    }
  }

  loadForm(): void {
    if (this.entityType === 'hotels') {

      this.loadHotelReviewForm();

    } else if (this.entityType === 'restaurants') {

      this.loadRestaurantReviewForm();

    } else if (this.entityType === 'activities') {

      this.loadActivityReviewForm();

    } else if (this.entityType === 'sightseeings') {

      this.loadSightseeingReviewForm();

    }
  }

  loadHotelReviewForm() {
    this.reviewForm = this.hotelReviewFormBuilder.group({
      title: ['', Validators.required],
      reviewText: ['', Validators.required],
      author: ['', Validators.required],
      visitingDate: ['', Validators.required],
      reviewCreationDate: [this.localDate],
      rating: ['', Validators.required],
      serviceRating: ['', Validators.required],
      locationRating: ['', Validators.required],
      qualityOfSleepRating: ['', Validators.required],
    });
  }

  loadActivityReviewForm() {
    this.reviewForm = this.activityReviewFormBuilder.group({
      title: ['', Validators.required],
      reviewText: ['', Validators.required],
      author: ['', Validators.required],
      visitingDate: ['', Validators.required],
      reviewCreationDate: [this.localDate],
      rating: ['', Validators.required],
    });
  }

  loadSightseeingReviewForm() {
    this.reviewForm = this.sightseeingReviewFormBuilder.group({
      title: ['', Validators.required],
      reviewText: ['', Validators.required],
      author: ['', Validators.required],
      visitingDate: ['', Validators.required],
      reviewCreationDate: [this.localDate],
      rating: ['', Validators.required],
    });
  }

  loadRestaurantReviewForm() {
    this.reviewForm = this.restaurantReviewFormBuilder.group({
      title: ['', Validators.required],
      reviewText: ['', Validators.required],
      author: ['', Validators.required],
      visitingDate: ['', Validators.required],
      reviewCreationDate: [this.localDate],
      rating: ['', Validators.required],
      serviceRating: ['', Validators.required],
      foodRating: ['', Validators.required],
      valueForMoneyRating: ['', Validators.required],
    });
  }

}
