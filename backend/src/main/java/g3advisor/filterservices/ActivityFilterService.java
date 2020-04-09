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
import g3advisor.model.entries.Activity;
import g3advisor.model.entries.Enums.CategoryToSortBy;
import g3advisor.model.entries.Enums.ResultsOrder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ActivityFilterService {

	private final EntityManager entityManager;

	public List<Activity> searchByQuery(String queryString) {

		String filterQueryString = queryString.split("§")[0];
		String sortQueryString = queryString.split("§")[1];

		RSQLVisitor<CriteriaQuery<Activity>, EntityManager> rsqlVisitor = new JpaCriteriaQueryVisitor<Activity>();

		CriteriaQuery<Activity> query = getCriteriaQuery(filterQueryString, rsqlVisitor);

		List<Activity> resultList = entityManager.createQuery(query).getResultList();
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

	private List<Activity> sortResults(List<Activity> resultList, String sortQueryString) {

		SortObject sortObject = new SortObject();
		sortObject.initialize(sortQueryString);

		if (sortCategoryIsName(sortObject)) {
			return sortResultsByName(resultList, sortObject);

		} else if (sortCategoryIsPrice(sortObject)) {
			return sortResultsByPrice(resultList, sortObject);

		} else {
			return sortResultsByRating(resultList, sortObject);
		}

	}

	private List<Activity> sortResultsByRating(List<Activity> resultList, SortObject sortObject) {
		if (sortingOrderIsAscending(sortObject)) {

			sortByRatingInAscendingOrder(resultList);

		} else {

			sortByRatingInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Activity> sortResultsByPrice(List<Activity> resultList, SortObject sortObject) {

		if (sortingOrderIsAscending(sortObject)) {
			SortByPriceInAscendingOrder(resultList);

		} else {

			SortByPriceInDescendingOrder(resultList);

		}
		return resultList;
	}

	private List<Activity> sortResultsByName(List<Activity> resultList, SortObject sortObject) {

		if (sortingOrderIsAscending(sortObject)) {
			SortByNameInAscendingOrder(resultList);

		} else {

			SortByNameInDescendingOrder(resultList);

		}
		return resultList;
	}

	private boolean sortCategoryIsPrice(SortObject sortObject) {
		return sortObject.getCategoryToSortBy().equals(CategoryToSortBy.PRICE);
	}

	private boolean sortCategoryIsName(SortObject sortObject) {
		return sortObject.getCategoryToSortBy().equals(CategoryToSortBy.NAME);
	}

	private void sortByRatingInDescendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a2.getAverageRating().compareTo(a1.getAverageRating());
			}
		});
	}

	private boolean sortingOrderIsAscending(SortObject sortObject) {
		return sortObject.getResultsOrder() == ResultsOrder.ASC;
	}

	private void sortByRatingInAscendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a1.getAverageRating().compareTo(a2.getAverageRating());
			}
		});
	}

	private void SortByPriceInAscendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a1.getPriceLevel().compareTo(a2.getPriceLevel());
			}
		});
	}

	private void SortByPriceInDescendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a2.getPriceLevel().compareTo(a1.getPriceLevel());
			}
		});
	}

	private void SortByNameInAscendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a1.getName().compareTo(a2.getName());
			}
		});
	}

	private void SortByNameInDescendingOrder(List<Activity> resultList) {
		Collections.sort(resultList, new Comparator<Activity>() {

			@Override
			public int compare(Activity a1, Activity a2) {
				return a2.getName().compareTo(a1.getName());
			}
		});
	}

}
