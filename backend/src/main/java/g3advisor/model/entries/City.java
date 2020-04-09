package g3advisor.model.entries;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "cities")
public class City {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cityId;

	@NotBlank
	@Column(name = "city_name")
	private String name;

	@NotBlank
	@Column(name = "description")
	private String description;

	@JsonIgnore
	@OneToMany(mappedBy = "city")
	private List<Activity> activities;

	@JsonIgnore
	@OneToMany(mappedBy = "city")
	private List<Hotel> hotels;

	@JsonIgnore
	@OneToMany(mappedBy = "city")
	private List<Restaurant> restaurants;

	@JsonIgnore
	@OneToMany(mappedBy = "city")
	private List<Sightseeing> sightseeings;

}
