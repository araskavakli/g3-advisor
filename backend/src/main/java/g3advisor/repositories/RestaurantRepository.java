package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.entries.Restaurant;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

	@Query(value = "SELECT * FROM restaurants r WHERE r.city_id = :cityId", nativeQuery = true)
	List<Restaurant> findAllRestaurantsByCityId(@Param("cityId") Long cityId);

}
