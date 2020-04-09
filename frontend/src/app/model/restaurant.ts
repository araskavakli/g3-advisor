export interface Restaurant {
  name: string;
  description: string;
  url: string;
  phoneNumber: string;
  ranking: number;
  averageRating: number;
  minimumPrice: number;
  maximumPrice: number;
  restaurantId: number;
  mealtype: string;
  cuisine: string;
  formsOfNutrition: string;
  isSmokeFree: boolean;
  isFamilyFriendly: boolean;
  streetAddress: string;
  priceLevel: number;
}
