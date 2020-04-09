export class HotelReview {

  id: number;
  title: string;
  reviewText: string;
  author: string;
  visitingDate: Date;
  reviewCreationDate = new Date();
  rating: number;

  serviceRating: number;
  locationRating: number;
  qualityOfSleepRating: number;

}
