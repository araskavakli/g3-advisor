package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.entries.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

	@Query(value = "SELECT * FROM activities a WHERE a.city_id = :cityId", nativeQuery = true)
	List<Activity> findAllActivitiesByCityId(@Param("cityId") Long cityId);

}
