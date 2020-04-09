package g3advisor.model.reviews;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonBackReference;

import g3advisor.model.entries.Restaurant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "restaurant_reviews")
public class RestaurantReview extends Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Min(1)
	@Max(5)
	private Integer serviceRating;
	@Min(1)
	@Max(5)
	private Integer foodRating;
	@Min(1)
	@Max(5)
	private Integer valueForMoneyRating;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "restaurant_id")
	private Restaurant restaurant;

}
