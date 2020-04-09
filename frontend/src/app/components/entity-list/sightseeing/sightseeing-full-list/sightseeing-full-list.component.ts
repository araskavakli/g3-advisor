import { Component, OnInit } from '@angular/core';
import { Sightseeing } from 'src/app/model/sightseeing';
import { City } from 'src/app/model/city';
import { ActivatedRoute } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';
import { EntryFilterObject } from 'src/app/model/entry-filter-object';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-sightseeing-full-list',
  templateUrl: './sightseeing-full-list.component.html',
  styleUrls: ['./sightseeing-full-list.component.css']
})
export class SightseeingFullListComponent implements OnInit {

  cityId: number;
  cityName: string;
  sightseeings: Sightseeing[];
  cities: City[];
  filterObject = new EntryFilterObject();
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private cityService: GetCityService,
              private entityService: EntityService,
              private filterService: FilterService) { }

  ngOnInit(): void {

    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.sightseeingImageUrls;

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    this.entityService.getSightseeings(this.cityId).subscribe(sightseeings => this.sightseeings = sightseeings);
    this.filterObject.entryType = this.route.snapshot.url[2].path;
  }

  handleSubmit(receivedFilterObject: EntryFilterObject) {
    receivedFilterObject.cityId = this.cityId;
    this.filterObject = receivedFilterObject;
    this.filterObject.entryType = this.route.snapshot.url[2].path;
    this.filterService.filterResults(receivedFilterObject)
                      .subscribe(sightseeings => this.sightseeings = sightseeings);
  }
}
