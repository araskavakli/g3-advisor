package g3advisor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import g3advisor.model.reviews.HotelReview;

@Repository
public interface HotelReviewRepository extends JpaRepository<HotelReview, Long> {
	
	@Query(value = "SELECT * FROM hotel_reviews h WHERE h.hotel_id = :hotelId ORDER BY review_creation_date DESC", nativeQuery = true)
	List<HotelReview> findReviewsOfHotelByHotelId(@Param("hotelId") Long hotelId);

}
