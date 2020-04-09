package g3advisor.filterservices;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import org.springframework.stereotype.Service;

import com.github.tennaito.rsql.jpa.JpaCriteriaQueryVisitor;

import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.Node;
import cz.jirutka.rsql.parser.ast.RSQLVisitor;
import g3advisor.model.entries.Restaurant;
import g3advisor.model.entries.Enums.CategoryToSortBy;
import g3advisor.model.entries.Enums.ResultsOrder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RestaurantFilterService {

	private final EntityManager entityManager;

	public List<Restaurant> searchByQueryRestaurants(String queryString) {
		String filterQueryString = queryString.split("§")[0];
		String sortQueryString = queryString.split("§")[1];
		
		RSQLVisitor<CriteriaQuery<Restaurant>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<Restaurant>();

		CriteriaQuery<Restaurant> query = getCriteriaQueryRestaurant(filterQueryString, rsqlVisitor);

		List<Restaurant> resultList = entityManager.createQuery(query).getResultList();
		if (resultList == null || resultList.isEmpty()) {
			return Collections.emptyList();
		}
		
		resultList = sortResults(resultList, sortQueryString);
		return resultList;

	}

	public <T> CriteriaQuery<T> getCriteriaQueryRestaurant(String queryString,
			RSQLVisitor<CriteriaQuery<T>, EntityManager> rsqlVisitor) {
		Node rootNode;
		CriteriaQuery<T> query;

		rootNode = new RSQLParser().parse(queryString);
		return rootNode.accept(rsqlVisitor, entityManager);

	}
	
	private List<Restaurant> sortResults(List<Restaurant> resultList, String sortQueryString) {
		
		SortObject sortObject = new SortObject();
		sortObject.initialize(sortQueryString);
		
		if (sortingCategoryIsName(sortObject)) {
			return sortResultsByName(resultList, sortObject);
		} else if (sortingCategoryIsPrice(sortObject)) {
			return sortResultsByPrice(resultList, sortObject);
		} else {
			return sortResultsByRating(resultList, sortObject);
		}

	}


	private List<Restaurant> sortResultsByRating(List<Restaurant> resultList, SortObject sortObject) {
		if (sortingOrderIsAscending(sortObject)) {
			
			sortByRatingInAscendingOrder(resultList);

		} else {
			
			sortByRatingInDescendingOrder(resultList);

		}
		return resultList;
	}




	private List<Restaurant> sortResultsByPrice(List<Restaurant> resultList, SortObject sortObject) {
		
		if (sortingOrderIsAscending(sortObject)) {
			
			sortByPriceInAscendingOrder(resultList);

		} else {
			
			sortByPriceInDescendingOrder(resultList);

		}
		return resultList;
	}

	

	private List<Restaurant> sortResultsByName(List<Restaurant> resultList, SortObject sortObject) {

		if (sortingOrderIsAscending(sortObject)) {
			
			sortByNameInAscendingOrder(resultList);

		} else {
			
			sortByNameInDescendingOrder(resultList);

		}
		return resultList;
	}

	private boolean sortingCategoryIsPrice(SortObject sortObject) {
		return sortObject.getCategoryToSortBy().equals(CategoryToSortBy.PRICE);
	}
	
	private boolean sortingCategoryIsName(SortObject sortObject) {
		return sortObject.getCategoryToSortBy().equals(CategoryToSortBy.NAME);
	}
	
	private boolean sortingOrderIsAscending(SortObject sortObject) {
		return sortObject.getResultsOrder() == ResultsOrder.ASC;
	}
	
	private void sortByRatingInDescendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {
			
			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r2.getAverageRating().compareTo(r1.getAverageRating());
			}
		});
	}
	
	private void sortByRatingInAscendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {
			
			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r1.getAverageRating().compareTo(r2.getAverageRating());
			}
		});
	}
	
	private void sortByPriceInDescendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {

			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r2.getPriceLevel().compareTo(r1.getPriceLevel());
			}
		});
	}

	private void sortByPriceInAscendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {

			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r1.getPriceLevel().compareTo(r2.getPriceLevel());
			}
		});
	}
	
	private void sortByNameInDescendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {

			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r2.getName().compareTo(r1.getName());
			}
		});
	}

	private void sortByNameInAscendingOrder(List<Restaurant> resultList) {
		Collections.sort(resultList, new Comparator<Restaurant>() {

			@Override
			public int compare(Restaurant r1, Restaurant r2) {
				return r1.getName().compareTo(r2.getName());
			}
		});
	}
}
