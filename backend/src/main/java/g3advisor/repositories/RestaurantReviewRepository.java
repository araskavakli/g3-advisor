package g3advisor.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.reviews.RestaurantReview;

@Repository
public interface RestaurantReviewRepository extends JpaRepository<RestaurantReview, Long> {
	
	@Query(value = "SELECT * FROM restaurant_reviews r WHERE r.restaurant_id = :restaurantId ORDER BY review_creation_date DESC", nativeQuery = true)
	List<RestaurantReview> findReviewsOfRestaurantByRestaurantId(@Param("restaurantId") Long restaurantId);

}