import { GetCityService } from 'src/app/services/get-city.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from 'src/app/services/entity.service';
import { City } from 'src/app/model/city';
import { EntryFilterObject } from 'src/app/model/entry-filter-object';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-hotel-full-list',
  templateUrl: './hotel-full-list.component.html',
  styleUrls: ['./hotel-full-list.component.css']
})
export class HotelFullListComponent implements OnInit {

  cityId: number;
  cityName: string;
  hotels: Hotel[];
  cities: City[];
  filterObject = new EntryFilterObject();
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private cityService: GetCityService,
              private entityService: EntityService,
              private filterService: FilterService) { }

  ngOnInit(): void {

    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.hotelImageUrls;

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    this.entityService.getHotels(this.cityId).subscribe(hotels => this.hotels = hotels);
    this.filterObject.entryType = this.route.snapshot.url[2].path;
  }

  handleSubmit(receivedFilterObject: EntryFilterObject) {
    receivedFilterObject.cityId = this.cityId;
    this.filterObject = receivedFilterObject;
    this.filterObject.entryType = this.route.snapshot.url[2].path;
    this.filterService.filterResults(receivedFilterObject)
                      .subscribe(hotels => this.hotels = hotels);
  }
}
