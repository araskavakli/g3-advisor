package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.entries.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

	@Query(value = "SELECT * FROM hotels h WHERE h.city_id = :cityId", nativeQuery = true)
	List<Hotel> findAllHotelsByCityId(@Param("cityId") Long cityId);
	
//	@Query(value = "SELECT * FROM hotels WHERE hotels.city_id = ?1", nativeQuery = true)
//	List<Hotel> findAllHotelsByCityId(Long cityId);
	
	
	// The examples below can do operations on object and then pass them to the query
	
//	@Query(value="SELECT * FROM hotels WHERE city_id = :#{#cityId} ", nativeQuery = true)
//	List<Hotel> findAllHotelsByCityId(@Param("cityId") Long cityId);
	
//	@Query(value="SELECT * FROM hotels WHERE city_id = :#{#city.cityId} ", nativeQuery = true)
//	List<Hotel> findAllHotelsByCityId(@Param("city") City city);
	
//	@Query("select u from User u where u.firstname = :#{#customer.firstname}")
//	List<User> findUsersByCustomersFirstname(@Param("customer") Customer customer);
}
