package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.reviews.ActivityReview;

@Repository
public interface ActivityReviewRepository extends JpaRepository<ActivityReview, Long> {
	
	@Query(value = "SELECT * FROM activity_reviews r WHERE r.activity_id = :activityId ORDER BY review_creation_date DESC", nativeQuery = true)
	List<ActivityReview> findReviewsOfActivityByActivityId(@Param("activityId") Long activityId);
	
}
