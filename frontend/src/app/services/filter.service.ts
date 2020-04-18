import { EntryFilterObject } from '../model/entryFilterObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const apiRoot = 'https://g3-advisor.herokuapp.com/filter';
const apiRoot = 'http://localhost:8080/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {


  constructor(private http: HttpClient) { }

  filterResults(filterObject: EntryFilterObject): Observable<any[]> {
    const searchUrl = this.generateFilterUrl(filterObject);
    return this.http.get<any[]>((`${apiRoot}/${searchUrl}`));
  }

  public generateFilterUrl(filterObject: EntryFilterObject) {

    filterObject.searchUrl = this.addCityId(filterObject);

    filterObject.searchUrl = this.setFilterCategories(filterObject);

    filterObject.searchUrl =  this.setSortingCategory(filterObject);

    filterObject.searchUrl = this.setSortingOrder(filterObject);

    return filterObject.searchUrl;

      }

      addCityId(filterObject: EntryFilterObject): string {
        return (filterObject.entryType + '?search=city.cityId==' + filterObject.cityId);
      }

      setFilterCategories(filterObject: EntryFilterObject) {
        if (filterObject.ranking) {
          filterObject.searchUrl = this.addRanking(filterObject);
        }
        if (filterObject.averageRating) {
          filterObject.searchUrl = this.addRating(filterObject);
        }
        if (filterObject.priceLevel) {
          filterObject.searchUrl = this.addPriceLevel(filterObject);
        }

        return filterObject.searchUrl;
      }

      addRanking(filterObject: EntryFilterObject): string {
        return filterObject.searchUrl + ';ranking=le=' + filterObject.ranking;
      }

      addRating(filterObject: EntryFilterObject): string {
        return filterObject.searchUrl + ';averageRating=ge=' + filterObject.averageRating;
      }

      addPriceLevel(filterObject: EntryFilterObject): string {
        const priceLevelOrdinal = this.determineOrdinalPriceLevel(filterObject);
        return filterObject.searchUrl + ';priceLevel=le=' + priceLevelOrdinal;
      }

      determineOrdinalPriceLevel(filterObject: EntryFilterObject) {
        if (filterObject.priceLevel === '€') {
            return 1;
        } else if (filterObject.priceLevel === '€-€€') {
            return 2;
        } else {
            return 3;
        }
      }

      setSortingCategory(filterObject: EntryFilterObject) {

        filterObject.searchUrl =  filterObject.searchUrl + '§';

        if (filterObject.categoryToSortBy === 'Rating') {
          filterObject.searchUrl = filterObject.searchUrl + 'rating;';
        }
        if (filterObject.categoryToSortBy === 'Price') {
          filterObject.searchUrl = filterObject.searchUrl + 'price;';
        }
        if (filterObject.categoryToSortBy === 'Name') {
          filterObject.searchUrl = filterObject.searchUrl + 'name;';
        }
        return filterObject.searchUrl;
      }

      setSortingOrder(filterObject: EntryFilterObject) {
        if (filterObject.sortDirection === 'Descending') {
          filterObject.searchUrl = filterObject.searchUrl + 'des';
        }
        if (filterObject.sortDirection === 'Ascending') {
          filterObject.searchUrl = filterObject.searchUrl + 'asc';
        }

        return filterObject.searchUrl;
      }

}








