import { Restaurant } from 'src/app/model/restaurant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';
import { City } from 'src/app/model/city';
import { EntryFilterObject } from 'src/app/model/entry-filter-object';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-restaurant-full-list',
  templateUrl: './restaurant-full-list.component.html',
  styleUrls: ['./restaurant-full-list.component.css']
})
export class RestaurantFullListComponent implements OnInit {

  cityId: number;
  cityName: string;
  restaurants: Restaurant[];
  cities: City[];
  filterObject = new EntryFilterObject();
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private cityService: GetCityService,
              private entityService: EntityService,
              private filterService: FilterService) { }

  ngOnInit(): void {

    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.restaurantImageUrls;

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    this.entityService.getRestaurants(this.cityId).subscribe(restaurants => this.restaurants = restaurants);
    this.filterObject.entryType = this.route.snapshot.url[2].path;
  }

  handleSubmit(receivedFilterObject: EntryFilterObject) {
    receivedFilterObject.cityId = this.cityId;
    this.filterObject = receivedFilterObject;
    this.filterObject.entryType = this.route.snapshot.url[2].path;
    this.filterService.filterResults(receivedFilterObject)
                      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
