package g3advisor.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import g3advisor.model.entries.Activity;
import g3advisor.model.entries.Hotel;
import g3advisor.model.entries.Restaurant;
import g3advisor.model.entries.Sightseeing;
import g3advisor.model.reviews.ActivityReview;
import g3advisor.model.reviews.HotelReview;
import g3advisor.model.reviews.RestaurantReview;
import g3advisor.model.reviews.SightseeingReview;
import g3advisor.repositories.ActivityRepository;
import g3advisor.repositories.ActivityReviewRepository;
import g3advisor.repositories.HotelRepository;
import g3advisor.repositories.HotelReviewRepository;
import g3advisor.repositories.RestaurantRepository;
import g3advisor.repositories.RestaurantReviewRepository;
import g3advisor.repositories.SightseeingRepository;
import g3advisor.repositories.SightseeingReviewRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping()
public class ReviewController {

	private final ActivityReviewRepository activityReviewRepository;
	private final HotelReviewRepository hotelReviewRepository;
	private final SightseeingReviewRepository sightseeingReviewRepository;
	private final RestaurantReviewRepository restaurantReviewRepository;
	
	private final HotelRepository hotelRepository;
	private final ActivityRepository activityRepository;
	private final SightseeingRepository sightseeingRepository;
	private final RestaurantRepository restaurantRepository;

	@GetMapping("/reviews/activities")
	public ResponseEntity<List<ActivityReview>> findReviewsOfActivity(
			@Valid @RequestParam(required = false) Long activityId) {
		if (activityId != null) {
			return new ResponseEntity<List<ActivityReview>>(
					activityReviewRepository.findReviewsOfActivityByActivityId(activityId), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ActivityReview>>(activityReviewRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/reviews/activities/{activityReviewId}")
	public ResponseEntity<ActivityReview> findActivityReview(@Valid @PathVariable Long activityReviewId) {
		return new ResponseEntity<ActivityReview>(activityReviewRepository.findById(activityReviewId).get(),
				HttpStatus.OK);
	}

	@PostMapping("/activities/{activityId}/reviews")
	public ResponseEntity<ActivityReview> addActivityReview(@Valid @RequestBody ActivityReview activityReview,
			@PathVariable Long activityId) {
		Optional<Activity> activityToBeUpdated = activityRepository.findById(activityId);
		Activity activity = activityToBeUpdated.get();
		activity.addReview(activityReview);
		return new ResponseEntity<ActivityReview>(activityReviewRepository.save(activityReview), HttpStatus.OK);
	}

	@PutMapping("/activities/{activityId}/edit/reviews")
	public ResponseEntity<ActivityReview> editActivityReview(@Valid @RequestBody ActivityReview activityReview,
			@PathVariable Long activityId, @RequestParam(required = true) Long activityReviewId) {
		activityReview.setId(activityReviewId);
		Optional<Activity> activityToBeUpdated = activityRepository.findById(activityId);
		Activity activity = activityToBeUpdated.get();
		activity.addReview(activityReview);
		
		return new ResponseEntity<ActivityReview>(activityReviewRepository.save(activityReview), HttpStatus.OK);
	}

	@DeleteMapping("/reviews/activities/delete/{activityReviewId}")
	public ResponseEntity<?> deleteActivityReview(@Valid @PathVariable Long activityReviewId) {
		activityReviewRepository.deleteById(activityReviewId);
		return new ResponseEntity<ActivityReview>(HttpStatus.OK);
	}

	@GetMapping("/reviews/hotels")
	public ResponseEntity<List<HotelReview>> findReviewsOfHotel(@Valid @RequestParam(required = false) Long hotelId) {
		if (hotelId != null) {
			return new ResponseEntity<List<HotelReview>>(hotelReviewRepository.findReviewsOfHotelByHotelId(hotelId),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<List<HotelReview>>(hotelReviewRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/reviews/hotels/{hotelReviewId}")
	public ResponseEntity<HotelReview> findHotelReview(@Valid @PathVariable Long hotelReviewId) {
		return new ResponseEntity<HotelReview>(hotelReviewRepository.findById(hotelReviewId).get(), HttpStatus.OK);
	}

	@PostMapping("/hotels/{hotelId}/reviews")
	public ResponseEntity<HotelReview> addHotelReview(@Valid @RequestBody HotelReview hotelReview,
			@PathVariable Long hotelId) {
		Optional<Hotel> hotelToBeUpdated = hotelRepository.findById(hotelId);
		Hotel hotel = hotelToBeUpdated.get();
		hotel.addReview(hotelReview);
		return new ResponseEntity<HotelReview>(hotelReviewRepository.save(hotelReview), HttpStatus.OK);
	}

	@PutMapping("/hotels/{hotelId}/edit/reviews")
	public ResponseEntity<HotelReview> editHotelReview(@Valid @RequestBody HotelReview hotelReview,
			@PathVariable Long hotelId, @RequestParam(required = true) Long hotelReviewId) {
		hotelReview.setId(hotelReviewId);
		Optional<Hotel> hotelToBeUpdated = hotelRepository.findById(hotelId);
		Hotel hotel = hotelToBeUpdated.get();
		hotel.addReview(hotelReview);
		return new ResponseEntity<HotelReview>(hotelReviewRepository.save(hotelReview), HttpStatus.OK);
	}

	@DeleteMapping("/reviews/hotels/delete/{hotelReviewId}")
	public ResponseEntity<?> deleteHotelReview(@Valid @PathVariable Long hotelReviewId) {
		hotelReviewRepository.deleteById(hotelReviewId);
		return new ResponseEntity<HotelReview>(HttpStatus.OK);
	}

	@GetMapping("/reviews/sightseeings")
	public ResponseEntity<List<SightseeingReview>> findReviewsOfSightseeing(
			@Valid @RequestParam(required = false) Long sightseeingId) {
		if (sightseeingId != null) {
			return new ResponseEntity<List<SightseeingReview>>(
					sightseeingReviewRepository.findReviewsOfSightseeingBySightseeingId(sightseeingId), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<SightseeingReview>>(sightseeingReviewRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/reviews/sightseeings/{sightseeingReviewId}")
	public ResponseEntity<SightseeingReview> findSightseeingReview(@Valid @PathVariable Long sightseeingReviewId) {
		return new ResponseEntity<SightseeingReview>(sightseeingReviewRepository.findById(sightseeingReviewId).get(),
				HttpStatus.OK);
	}

	@PostMapping("/sightseeings/{sightseeingId}/reviews")
	public ResponseEntity<SightseeingReview> addSightseeingReview(@Valid @RequestBody SightseeingReview sightseeingReview,
			@PathVariable Long sightseeingId) {
		Optional<Sightseeing> sightseeingToBeUpdated = sightseeingRepository.findById(sightseeingId);
		Sightseeing sightseeing = sightseeingToBeUpdated.get();
		sightseeing.addReview(sightseeingReview);
		return new ResponseEntity<SightseeingReview>(sightseeingReviewRepository.save(sightseeingReview), HttpStatus.OK);
	}

	@PutMapping("/sightseeings/{sightseeingId}/edit/reviews")
	public ResponseEntity<SightseeingReview> editSightseeingReview(@Valid @RequestBody SightseeingReview sightseeingReview,
			@PathVariable Long sightseeingId, @RequestParam(required = true) Long sightseeingReviewId) {
		sightseeingReview.setId(sightseeingReviewId);
		Optional<Sightseeing> sightseeingToBeUpdated = sightseeingRepository.findById(sightseeingId);
		Sightseeing sightseeing = sightseeingToBeUpdated.get();
		sightseeing.addReview(sightseeingReview);
		return new ResponseEntity<SightseeingReview>(sightseeingReviewRepository.save(sightseeingReview), HttpStatus.OK);
	}

	@DeleteMapping("/reviews/sightseeings/delete/{sightseeingReviewId}")
	public ResponseEntity<?> deleteSightseeingReview(@Valid @PathVariable Long sightseeingReviewId) {
		sightseeingReviewRepository.deleteById(sightseeingReviewId);
		return new ResponseEntity<SightseeingReview>(HttpStatus.OK);
	}

	@GetMapping("/reviews/restaurants")
	public ResponseEntity<List<RestaurantReview>> findReviewsOfRestaurant(
			@Valid @RequestParam(required = false) Long restaurantId) {
		if (restaurantId != null) {
			return new ResponseEntity<List<RestaurantReview>>(
					restaurantReviewRepository.findReviewsOfRestaurantByRestaurantId(restaurantId), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<RestaurantReview>>(restaurantReviewRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/reviews/restaurants/{restaurantReviewId}")
	public ResponseEntity<RestaurantReview> findRestaurantReview(@Valid @PathVariable Long restaurantReviewId) {
		return new ResponseEntity<RestaurantReview>(restaurantReviewRepository.findById(restaurantReviewId).get(),
				HttpStatus.OK);
	}

	@PostMapping("/restaurants/{restaurantId}/reviews")
	public ResponseEntity<RestaurantReview> addRestaurantReview(@Valid @RequestBody RestaurantReview restaurantReview,
			@PathVariable Long restaurantId) {
		Optional<Restaurant> restaurantToBeUpdated = restaurantRepository.findById(restaurantId);
		Restaurant restaurant = restaurantToBeUpdated.get();
		restaurant.addReview(restaurantReview);
		return new ResponseEntity<RestaurantReview>(restaurantReviewRepository.save(restaurantReview), HttpStatus.OK);
	}

	@PutMapping("/restaurants/{restaurantId}/edit/reviews")
	public ResponseEntity<RestaurantReview> editRestaurantReview(@Valid @RequestBody RestaurantReview restaurantReview,
			@PathVariable Long restaurantId, @RequestParam(required = true) Long restaurantReviewId) {
		restaurantReview.setId(restaurantReviewId);
		Optional<Restaurant> restaurantToBeUpdated = restaurantRepository.findById(restaurantId);
		Restaurant restaurant = restaurantToBeUpdated.get();
		restaurant.addReview(restaurantReview);
		return new ResponseEntity<RestaurantReview>(restaurantReviewRepository.save(restaurantReview), HttpStatus.OK);
	}

	@DeleteMapping("/reviews/restaurants/delete/{restaurantReviewId}")
	public ResponseEntity<?> deleteRestaurantReview(@Valid @PathVariable Long restaurantReviewId) {
		restaurantReviewRepository.deleteById(restaurantReviewId);
		return new ResponseEntity<RestaurantReview>(HttpStatus.OK);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> errorHandler(MethodArgumentNotValidException e) {
		return new ResponseEntity<String>("Sorry, there seems to be a problem with your request", HttpStatus.BAD_REQUEST);
	}

}
