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

import g3advisor.model.reviews.ActivityReview;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "activities")
public class Activity extends Entry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long activityId;

	@JsonBackReference
	@OneToMany(mappedBy = "activity")
	private List<ActivityReview> activityReviews;

	@ManyToOne
	@JoinColumn(name = "city_id")
	private City city;

	public void addReview(ActivityReview activityReview) {
		activityReview.setActivity(this);
		activityReviews.add(activityReview);
		this.updateRating();

	}

	@Override
	public void updateRating() {
		double avgRating = 0;
		for (ActivityReview activityReview : this.activityReviews) {
			avgRating += activityReview.getRating();
		}

		avgRating = avgRating / this.activityReviews.size();
		this.setAverageRating(avgRating);

	}

}
