package g3advisor.model.reviews;

import java.time.LocalDate;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public abstract class Review {

	@NotBlank
	@Size(min = 1, max = 50)
	private String title;
	@NotBlank
	@Size(min = 1, max = 500)
	private String reviewText;
	@NotBlank
	@Size(min = 1, max = 50)
	private String author;
	
	@PastOrPresent
 	@DateTimeFormat(pattern="yyyy-mm-dd")
	@NotNull
	private LocalDate visitingDate;
	
	@PastOrPresent
 	@DateTimeFormat(pattern="yyyy-mm-dd")
	@NotNull
	private LocalDate reviewCreationDate;
	@NotNull
	@Min(1)
	@Max(5)
	private Integer rating;

}
