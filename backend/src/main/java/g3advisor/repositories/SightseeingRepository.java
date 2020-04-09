package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.entries.Sightseeing;

@Repository
public interface SightseeingRepository extends JpaRepository<Sightseeing, Long> {

	@Query(value = "SELECT * FROM sightseeings l WHERE l.city_id = :cityId", nativeQuery = true)
	List<Sightseeing> findAllSightseeingByCityId(@Param("cityId") Long cityId);

}
