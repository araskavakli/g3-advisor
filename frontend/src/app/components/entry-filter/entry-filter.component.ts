import { SORT_BY, SORT_DIRECTION, PRICE_LEVEL } from './../../model/filter_options';
import { EntryFilterObject } from './../../model/entry-filter-object';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { STARS, RANKING } from 'src/app/model/filter_options';

@Component({
  selector: 'app-entry-filter',
  templateUrl: './entry-filter.component.html',
  styleUrls: ['./entry-filter.component.css']
})
export class EntryFilterComponent implements OnInit {

  filterObject = new EntryFilterObject();
  optionStars = STARS;
  optionsRanking = RANKING;
  optionsPriceLevel = PRICE_LEVEL;
  optionsSortBy = SORT_BY;
  optionsSortDirection = SORT_DIRECTION;

  @Output()
  submitFilterObjekt = new EventEmitter<EntryFilterObject>();


  constructor() { }

  ngOnInit(): void {
    this.filterObject.categoryToSortBy = 'Rating';
    this.filterObject.sortDirection = 'Descending';
  }

  submitFilter(): void {
    this.submitFilterObjekt.emit(this.filterObject);

  }

  resetFilter(): void {
    this.filterObject.averageRating = undefined;
    this.filterObject.ranking = undefined;
    this.filterObject.priceLevel = undefined;
  }

  }


