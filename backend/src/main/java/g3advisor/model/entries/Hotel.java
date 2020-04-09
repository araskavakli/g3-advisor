package g3advisor.model.entries;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import g3advisor.model.reviews.HotelReview;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "hotels")
public class Hotel extends Entry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long hotelId;
	
	@NotBlank
	private String checkInTime;
	
	@NotBlank
	private String checkOutTime;

	@ManyToOne
	@JoinColumn(name = "city_id")
	@JsonBackReference
	private City city;

	@JsonManagedReference
	@OneToMany(mappedBy = "hotel")
	private List<HotelReview> hotelReviews;

	public void addReview(HotelReview hotelReview) {
		hotelReview.setHotel(this);
		hotelReviews.add(hotelReview);
		this.updateRating();

	}

	@Override
	public void updateRating() {
		double avgRating = 0;
		for (HotelReview hotelReview : this.hotelReviews) {
			avgRating += hotelReview.getRating();
		}

		avgRating = avgRating / this.hotelReviews.size();
		this.setAverageRating(avgRating);

	}

}
