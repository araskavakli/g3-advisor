package g3advisor.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import g3advisor.filterservices.ActivityFilterService;
import g3advisor.filterservices.HotelFilterService;
import g3advisor.filterservices.RestaurantFilterService;
import g3advisor.filterservices.SightseeingFilterService;
import g3advisor.model.entries.Activity;
import g3advisor.model.entries.Hotel;
import g3advisor.model.entries.Restaurant;
import g3advisor.model.entries.Sightseeing;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/filter")
public class FilterController {

	private final HotelFilterService hotelServiceRsql;
	private final RestaurantFilterService restaurantServiceRsql;
	private final SightseeingFilterService sightseeingServiceRsql;
	private final ActivityFilterService activityServiceRsql;
	
	
	@GetMapping("/hotels")
	public ResponseEntity<?> genericFilterHotel(@RequestParam(value = "search") String query) {
		List<Hotel> result = null;
		result = hotelServiceRsql.searchByQuery(query);
		return ResponseEntity.status(HttpStatus.OK).body(result);

	}

	@GetMapping("/restaurants")
	public ResponseEntity<?> genericFilterRestaurants(@RequestParam(value = "search") String query) {
		List<Restaurant> result = null;
		result = restaurantServiceRsql.searchByQueryRestaurants(query);
		return ResponseEntity.status(HttpStatus.OK).body(result);

	}
	
	@GetMapping("/sightseeing")
	public ResponseEntity<?> genericFilterSightseeings(@RequestParam(value = "search") String query) {
		List<Sightseeing> result = null;
		result = sightseeingServiceRsql.searchByQuery(query);
		return ResponseEntity.status(HttpStatus.OK).body(result);

	}
	
	
	@GetMapping("/activities")
	public ResponseEntity<?> genericFilterActivities(@RequestParam(value = "search") String query) {
		List<Activity> result = null;
		result = activityServiceRsql.searchByQuery(query);
		return ResponseEntity.status(HttpStatus.OK).body(result);

	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> errorHandler(MethodArgumentNotValidException e) {
		return new ResponseEntity<String>("Sorry, there seems to be a problem with your request", HttpStatus.BAD_REQUEST);
	}
	


}
