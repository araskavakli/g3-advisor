package g3advisor.model.entries;

public class Enums {

	public enum Cuisine {
		
		Indian, German, Turkish, Italian, French, Thai, 
		Vietnamese, Chinese, Japanese, 
		Mexican, Ethiopian, Southamerican; 

	}
	
	public enum FormsOfNutrition {
		Vegetarian, Vegan, Mixed
	}
	
	public enum MealType {
		Breakfast, Lunch, Dinner
	}
	
	public enum HotelFacilities {
		Free_WlAN, Pool, AC; 
	}
	
	public enum ResultsOrder {
		ASC, DES;
	}
	
	public enum CategoryToSortBy {
		RATING, NAME, PRICE;
	}
	
	public enum PriceLevel {
		LOW, MEDIUM, HIGH
	}

}
