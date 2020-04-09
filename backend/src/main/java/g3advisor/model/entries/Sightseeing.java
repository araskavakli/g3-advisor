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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import g3advisor.model.reviews.SightseeingReview;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "sightseeings")
public class Sightseeing extends Entry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long sightseeingId;

	@ManyToOne
	@JoinColumn(name = "city_id")
	@JsonBackReference
	private City city;

	@JsonManagedReference
	@OneToMany(mappedBy = "sightseeing")
	private List<SightseeingReview> sightseeingReviews;

	public void addReview(SightseeingReview sightseeingReview) {
		sightseeingReview.setSightseeing(this);
		sightseeingReviews.add(sightseeingReview);
		this.updateRating();

	}

	@Override
	public void updateRating() {
		double avgRating = 0;
		for (SightseeingReview sightseeingReview : this.sightseeingReviews) {
			avgRating += sightseeingReview.getRating();
		}

		avgRating = avgRating / this.sightseeingReviews.size();
		this.setAverageRating(avgRating);

	}

}
