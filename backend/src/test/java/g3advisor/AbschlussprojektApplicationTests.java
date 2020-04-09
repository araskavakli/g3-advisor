package g3advisor;

import java.time.LocalDate;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import g3advisor.model.reviews.ActivityReview;
import g3advisor.model.reviews.HotelReview;
import g3advisor.model.reviews.RestaurantReview;
import g3advisor.model.reviews.SightseeingReview;
import g3advisor.repositories.ActivityRepository;
import g3advisor.repositories.ActivityReviewRepository;
import g3advisor.repositories.CityRepository;
import g3advisor.repositories.HotelRepository;
import g3advisor.repositories.RestaurantRepository;
import g3advisor.repositories.RestaurantReviewRepository;
import g3advisor.repositories.SightseeingRepository;
import g3advisor.repositories.SightseeingReviewRepository;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import org.springframework.boot.web.server.LocalServerPort;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AbschlussprojektApplicationTests {

	@Autowired
	CityRepository cityRepository;

	@Autowired
	ActivityReviewRepository activityReviewRepository;

	@Autowired
	ActivityRepository activityRepository;

	@Autowired
	HotelRepository hotelRepository;

	@Autowired
	HotelRepository hotelReviewRepository;

	@Autowired
	SightseeingRepository sightseeingsRepository;

	@Autowired
	RestaurantRepository restaurantRepository;

	@Autowired
	RestaurantReviewRepository restaurantReviewRepository;


	@Autowired
	SightseeingReviewRepository sightseeingsReviewRepository;

	@LocalServerPort
	private int port;

	@Before
	public void setUp() throws Exception {
		RestAssured.port = port;
	}

	@Test
	public void getActivities_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/activities").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getActivitiesPerEachCity_returns200() {
		int numberOfCitiesInDB = (int) cityRepository.count();
		for (int i = 1; i <= numberOfCitiesInDB; i++) {
			Response response = RestAssured.get("http://localhost:" + port + "/activities/?cityId=" + i).andReturn();
			Assert.assertEquals(200, response.getStatusCode());
			// converts JSON body to string. If the return element is an empty list it has a
			// length of 2 --> "[]"
			Assert.assertNotEquals(2, response.body().asString().length());
		}
	}

	@Test
	public void getSelectedActivity_returns200() {
		int numberOfActivitesInDB = (int) activityRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/activities/" + numberOfActivitesInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getHotels_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/hotels").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getHotelsPerEachCity_returns200() {
		int numberOfCitiesInDB = (int) cityRepository.count();
		for (int i = 1; i <= numberOfCitiesInDB; i++) {
			Response response = RestAssured.get("http://localhost:" + port + "/hotels/?cityId=" + i).andReturn();
			Assert.assertEquals(200, response.getStatusCode());
			// converts JSON body to string. If the return element is an empty list it has a
			// length of 2 --> "[]"
			Assert.assertNotEquals(2, response.body().asString().length());
		}
	}

	@Test
	public void getSelectedHotel_returns200() {
		int numberOfHotelsInDB = (int) hotelRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/hotels/" + numberOfHotelsInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSightseeings_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/sightseeings").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSightseeingsPerEachCity_returns200() {
		int numberOfCitiesInDB = (int) cityRepository.count();
		for (int i = 1; i <= numberOfCitiesInDB; i++) {
			Response response = RestAssured.get("http://localhost:" + port + "/sightseeings/?cityId=" + i).andReturn();
			Assert.assertEquals(200, response.getStatusCode());
			// converts JSON body to string. If the return element is an empty list it has a
			// length of 2 --> "[]"
			Assert.assertNotEquals(2, response.body().asString().length());
		}
	}

	@Test
	public void getSelectedSightseeings_returns200() {
		int numberOfSightseeingsInDB = (int) sightseeingsRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/sightseeings/" + numberOfSightseeingsInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getRestaurants_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/restaurants").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getRestaurantsPerEachCity_returns200() {
		int numberOfCitiesInDB = (int) cityRepository.count();
		for (int i = 1; i <= numberOfCitiesInDB; i++) {
			Response response = RestAssured.get("http://localhost:" + port + "/restaurants/?cityId=" + i).andReturn();
			Assert.assertEquals(200, response.getStatusCode());
			// converts JSON body to string. If the return element is an empty list it has a
			// length of 2 --> "[]"
			Assert.assertNotEquals(2, response.body().asString().length());
		}
	}

	@Test
	public void getSelectedRestaurant_returns200() {
		int numberOfRestaurantsInDB = (int) restaurantRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/restaurants/" + numberOfRestaurantsInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getAllActivityReviews_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/activities").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getReviewsOfActivity_returns200() {
		int numberOfActivitiesInDB = (int) activityRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/activities/" + numberOfActivitiesInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSelectedActivityReview_returns200() {
		int numberOfReviewsInDB = (int) activityReviewRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/activities/?activityId=" + numberOfReviewsInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void addActivityReview_returns200() {
		ActivityReview review = new ActivityReview();
		review.setTitle("Test title");
		review.setReviewText("A very very nice dummy text");
		review.setAuthor("Jane Doe");
		review.setVisitingDate(LocalDate.of(2020, 2, 26));
		review.setReviewCreationDate(LocalDate.of(2020, 4, 7));
		review.setRating(3);
		int numberOfActivitiesInDB = (int) activityRepository.count();
		Response response = RestAssured.given().contentType("application/json").body(review)
				.post("http://localhost:" + port + "/activities/" + numberOfActivitiesInDB + "/reviews");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void deleteSelectedActivityReview_returns200() {
		Response response = RestAssured.delete("http://localhost:" + port + "/reviews/activities/delete/1");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getAllHotelReviews_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/hotels").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getReviewsOfHotel_returns200() {
		int numberOfHotelsInDB = (int) hotelRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/hotels/" + numberOfHotelsInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSelectedHotelReview_returns200() {
		int numberOfReviewsInDB = (int) hotelReviewRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/hotels/?hotelId=" + numberOfReviewsInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void addHotelReview_returns200() {
		HotelReview review = new HotelReview();
		review.setTitle("Test title");
		review.setReviewText("A ver very nice dummy text");
		review.setAuthor("Jane Doe");
		review.setVisitingDate(LocalDate.of(2020, 02, 26));
		review.setReviewCreationDate(LocalDate.of(2020, 04, 5));
		review.setRating(3);
		review.setLocationRating(2);
		review.setQualityOfSleepRating(2);
		review.setServiceRating(4);
		int numberOfActivitiesInDB = (int) activityRepository.count();
		Response response = RestAssured.given().contentType("application/json").body(review)
				.post("http://localhost:" + port + "/hotels/" + numberOfActivitiesInDB + "/reviews");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void deleteSelectedHotelReview_returns200() {
		Response response = RestAssured.delete("http://localhost:" + port + "/reviews/hotels/delete/1");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getAllSightseeingReviews_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/sightseeings").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getReviewsOfSightseeings_returns200() {
		int numberOfSightseeingsInDB = (int) sightseeingsRepository.count();
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/sightseeings/" + numberOfSightseeingsInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSelectedSightseeingsReview_returns200() {
		int numberOfReviewsInDB = (int) sightseeingsReviewRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/sightseeings/?sightseeingId=" + numberOfReviewsInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void addSightseeingsReview_returns200() {
		SightseeingReview review = new SightseeingReview();
		review.setTitle("Test title");
		review.setReviewText("A ver very nice dummy text");
		review.setAuthor("Jane Doe");
		review.setVisitingDate(LocalDate.of(2020, 02, 26));
		review.setReviewCreationDate(LocalDate.of(2020, 04, 2));
		review.setRating(3);
		int numberOfSightseeingsInDB = (int) sightseeingsRepository.count();
		Response response = RestAssured.given().contentType("application/json").body(review)
				.post("http://localhost:" + port + "/sightseeings/" + numberOfSightseeingsInDB + "/reviews");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void deleteSelectedSightseeingsReview_returns200() {
		Response response = RestAssured.delete("http://localhost:" + port + "/reviews/sightseeings/delete/1");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getAllRestaurantReviews_returns200() {
		Response response = RestAssured.get("http://localhost:" + port + "/reviews/restaurants").andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getReviewsOfRestaurant_returns200() {
		int numberOfRestaurantsInDB = (int) restaurantRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/restaurants/" + numberOfRestaurantsInDB).andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void getSelectedRestaurantReview_returns200() {
		int numberOfReviewsInDB = (int) restaurantReviewRepository.count();
		Response response = RestAssured
				.get("http://localhost:" + port + "/reviews/restaurants/?restaurantId=" + numberOfReviewsInDB)
				.andReturn();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void addRestaurantReview_returns200() {
		RestaurantReview review = new RestaurantReview();
		review.setTitle("Test title");
		review.setReviewText("A ver very nice dummy text");
		review.setAuthor("Jane Doe");
		review.setVisitingDate(LocalDate.of(2020, 02, 26));
		review.setReviewCreationDate(LocalDate.of(2020, 04, 8));
		review.setRating(3);
		review.setFoodRating(2);
		review.setValueForMoneyRating(2);
		review.setServiceRating(3);
		int numberOfRestaurantsInDB = (int) restaurantRepository.count();
		Response response = RestAssured.given().contentType("application/json").body(review)
				.post("http://localhost:" + port + "/restaurants/" + numberOfRestaurantsInDB + "/reviews");
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Test
	public void deleteSelectedRestaurantReview_returns200() {
		Response response = RestAssured.delete("http://localhost:" + port + "/reviews/restaurants/delete/1");
		Assert.assertEquals(200, response.getStatusCode());
	}
}