package g3advisor.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import g3advisor.model.entries.City;
import g3advisor.repositories.CityRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cities")
public class CityController {

	private final CityRepository cityRepository;

	@GetMapping
	public ResponseEntity<List<City>> getCity() {
		return new ResponseEntity<List<City>>(cityRepository.findAll(), HttpStatus.OK);
	}

	@GetMapping("/{cityName}")
	public ResponseEntity<Long> getCities(@PathVariable String cityName) {
		return new ResponseEntity<Long>(cityRepository.getCityIdByName(cityName), HttpStatus.OK);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<String> errorHandler(MethodArgumentNotValidException e) {
		return new ResponseEntity<String>("Sorry, there seems to be a problem with your request", HttpStatus.BAD_REQUEST);
	}

}
