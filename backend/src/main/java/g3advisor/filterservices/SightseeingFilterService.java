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
import g3advisor.model.entries.Sightseeing;
import g3advisor.model.entries.Enums.CategoryToSortBy;
import g3advisor.model.entries.Enums.ResultsOrder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SightseeingFilterService {

	private final EntityManager entityManager;

	public List<Sightseeing> searchByQuery(String queryString) {

		String filterQueryString = queryString.split("§")[0];
		String sortQueryString = queryString.split("§")[1];

		RSQLVisitor<CriteriaQuery<Sightseeing>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<Sightseeing>();

		CriteriaQuery<Sightseeing> query = getCriteriaQuery(filterQueryString, rsqlVisitor);

		List<Sightseeing> resultList = entityManager.createQuery(query).getResultList();
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

	private List<Sightseeing> sortResults(List<Sightseeing> resultList, String sortQueryString) {

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

	private List<Sightseeing> sortResultsByRating(List<Sightseeing> resultList, SortObject sortObject) {
		if (sortingOrderIsAscending(sortObject)) {
			sortByRatingInAscendingOrder(resultList);

		} else {

			sortByRatingInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Sightseeing> sortResultsByPrice(List<Sightseeing> resultList, SortObject sortObject) {

		if (sortingOrderIsAscending(sortObject)) {
			sortByPriceInAscendingOrder(resultList);

		} else {

			sortByPriceInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Sightseeing> sortResultsByName(List<Sightseeing> resultList, SortObject sortObject) {

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

	private void sortByRatingInDescendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l2.getAverageRating().compareTo(l1.getAverageRating());
			}
		});
	}

	private void sortByRatingInAscendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l1.getAverageRating().compareTo(l2.getAverageRating());
			}
		});
	}

	private void sortByPriceInDescendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l2.getPriceLevel().compareTo(l1.getPriceLevel());
			}
		});
	}

	private void sortByPriceInAscendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l1.getPriceLevel().compareTo(l2.getPriceLevel());
			}
		});
	}

	private void sortByNameInDescendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l2.getName().compareTo(l1.getName());
			}
		});
	}

	private void sortByNameInAscendingOrder(List<Sightseeing> resultList) {
		Collections.sort(resultList, new Comparator<Sightseeing>() {

			@Override
			public int compare(Sightseeing l1, Sightseeing l2) {
				return l1.getName().compareTo(l2.getName());
			}
		});
	}

}
