package g3advisor.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import g3advisor.model.entries.Activity;
import g3advisor.model.entries.Hotel;
import g3advisor.model.entries.Restaurant;
import g3advisor.model.entries.Sightseeing;
import g3advisor.repositories.ActivityRepository;
import g3advisor.repositories.CityRepository;
import g3advisor.repositories.HotelRepository;
import g3advisor.repositories.RestaurantRepository;
import g3advisor.repositories.SightseeingRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@RestController
@RequestMapping()
public class EntryController {

	private final CityRepository cityRepository;
	private final ActivityRepository activityRepository;
	private final HotelRepository hotelRepository;
	private final SightseeingRepository sightseeingRepository;
	private final RestaurantRepository restaurantRepository;

	@GetMapping("/activities")
	public ResponseEntity<List<Activity>> findActivities(@Valid @RequestParam(required = false) Long cityId) {
		if (cityId != null) {
			return new ResponseEntity<List<Activity>>(activityRepository.findAllActivitiesByCityId(cityId),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Activity>>(activityRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/activities/{activityId}")
	public ResponseEntity<Activity> findActivityById(@Valid @PathVariable Long activityId) {
		return new ResponseEntity<Activity>(activityRepository.findById(activityId).get(), HttpStatus.OK);
	}

	@GetMapping("/hotels")
	public ResponseEntity<List<Hotel>> findHotels(@Valid @RequestParam(required = false) Long cityId) {
		if (cityId != null) {
			return new ResponseEntity<List<Hotel>>(hotelRepository.findAllHotelsByCityId(cityId), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Hotel>>(hotelRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/hotels/{hotelId}")
	public ResponseEntity<Hotel> findHotelById(@Valid @PathVariable Long hotelId) {
		return new ResponseEntity<Hotel>(hotelRepository.findById(hotelId).get(), HttpStatus.OK);
	}

	@GetMapping("/sightseeings")
	public ResponseEntity<List<Sightseeing>> findSightseeings(@Valid @RequestParam(required = false) Long cityId) {
		if (cityId != null) {
			return new ResponseEntity<List<Sightseeing>>(sightseeingRepository.findAllSightseeingByCityId(cityId),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Sightseeing>>(sightseeingRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/sightseeings/{sightseeingId}")
	public ResponseEntity<Sightseeing> findSightseeingById(@Valid @PathVariable Long sightseeingId) {
		return new ResponseEntity<Sightseeing>(sightseeingRepository.findById(sightseeingId).get(), HttpStatus.OK);
	}

	@GetMapping("/restaurants")
	public ResponseEntity<List<Restaurant>> findRestaurants(@Valid @RequestParam(required = false) Long cityId) {
		if (cityId != null) {
			return new ResponseEntity<List<Restaurant>>(restaurantRepository.findAllRestaurantsByCityId(cityId),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Restaurant>>(restaurantRepository.findAll(), HttpStatus.OK);
		}
	}

	@GetMapping("/restaurants/{restaurantId}")
	public ResponseEntity<Restaurant> findRestaurantById(@Valid @PathVariable Long restaurantId) {
		return new ResponseEntity<Restaurant>(restaurantRepository.findById(restaurantId).get(), HttpStatus.OK);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> errorHandler(MethodArgumentNotValidException e) {
		return new ResponseEntity<String>("Sorry, there seems to be a problem with your request", HttpStatus.BAD_REQUEST);
	}

}
