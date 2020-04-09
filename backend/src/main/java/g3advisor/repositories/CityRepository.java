package g3advisor.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.entries.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

//	public Object findByName(String name);
//	public Object findByRating(Integer rating);
//	public Object findByPrice(Integer price);

	@Query(value = "SELECT * FROM cities ORDER BY RAND() LIMIT 1", nativeQuery = true)
	City findOneRandomCity();
	
	@Query(value = "SELECT city_id FROM cities c WHERE c.city_name = :cityName", nativeQuery = true)
	Long getCityIdByName(@Param("cityName") String cityName);

}
