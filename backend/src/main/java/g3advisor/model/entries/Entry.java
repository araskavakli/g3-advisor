package g3advisor.model.entries;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@MappedSuperclass
public abstract class Entry implements AverageRatingUpdate {

	@NotBlank
	@Size(min = 1, max = 50, message = "Title length should be maximum 50 characters long." )
	private String name;

	@NotBlank
	@Size(min = 1, max = 300, message = "Description should be max 300 characters long." )
	@Column(columnDefinition = "LONGTEXT")
	private String description;

	@NotBlank
	private String url;

	@NotBlank
	private String streetAddress;

	@NotBlank
	private String phoneNumber;

	@Min(1)
	@NotNull
	private Integer ranking;

	@NotNull
	@Min(1)
	@Max(5)
	private Double averageRating;
	
	@NotNull
	@Min(1) @Max(3)
	private Integer priceLevel;
	
	@NotNull
	@Min(0)
	private Integer maximumPrice;
	
	@NotNull
	@Min(0)
	private Integer minimumPrice;

}
