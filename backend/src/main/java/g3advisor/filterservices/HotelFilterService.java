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
import g3advisor.model.entries.Hotel;
import g3advisor.model.entries.Enums.CategoryToSortBy;
import g3advisor.model.entries.Enums.ResultsOrder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class HotelFilterService {

	private final EntityManager entityManager;

	public List<Hotel> searchByQuery(String queryString) {

		String filterQueryString = queryString.split("§")[0];
		String sortQueryString = queryString.split("§")[1];

		RSQLVisitor<CriteriaQuery<Hotel>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<Hotel>();

		CriteriaQuery<Hotel> query = getCriteriaQuery(filterQueryString, rsqlVisitor);

		List<Hotel> resultList = entityManager.createQuery(query).getResultList();
		if (resultList == null || resultList.isEmpty()) {
			return Collections.emptyList();
		}

		resultList = sortResults(resultList, sortQueryString);
		return resultList;

	}

	public <T> CriteriaQuery<T> getCriteriaQuery(String queryString,
			RSQLVisitor<CriteriaQuery<T>, EntityManager> rsqlVisitor) {
		Node rootNode;
		CriteriaQuery<T> query;

		rootNode = new RSQLParser().parse(queryString);
		return rootNode.accept(rsqlVisitor, entityManager);

	}

	private List<Hotel> sortResults(List<Hotel> resultList, String sortQueryString) {

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

	private List<Hotel> sortResultsByRating(List<Hotel> resultList, SortObject sortObject) {
		if (sortingOrderIsAscending(sortObject)) {
			sortByRatingInAscendingOrder(resultList);

		} else {

			sortByRatingInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Hotel> sortResultsByPrice(List<Hotel> resultList, SortObject sortObject) {

		if (sortingOrderIsAscending(sortObject)) {
			sortByPriceInAscendingOrder(resultList);

		} else {

			sortByPriceInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Hotel> sortResultsByName(List<Hotel> resultList, SortObject sortObject) {

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

	private void sortByRatingInDescendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h2.getAverageRating().compareTo(h1.getAverageRating());
			}
		});
	}

	private void sortByRatingInAscendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h1.getAverageRating().compareTo(h2.getAverageRating());
			}
		});
	}

	private void sortByPriceInDescendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h2.getPriceLevel().compareTo(h1.getPriceLevel());
			}
		});
	}

	private void sortByPriceInAscendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h1.getPriceLevel().compareTo(h2.getPriceLevel());
			}
		});
	}

	private void sortByNameInDescendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h2.getName().compareTo(h1.getName());
			}
		});
	}

	private void sortByNameInAscendingOrder(List<Hotel> resultList) {
		Collections.sort(resultList, new Comparator<Hotel>() {

			@Override
			public int compare(Hotel h1, Hotel h2) {
				return h1.getName().compareTo(h2.getName());
			}
		});
	}

}
