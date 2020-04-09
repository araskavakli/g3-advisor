import { Component, OnInit } from '@angular/core';
import { FilterService } from './../../../../services/filter.service';
import { Activity } from 'src/app/model/activity';
import { City } from 'src/app/model/city';
import { ActivatedRoute } from '@angular/router';
import { GetCityService } from 'src/app/services/get-city.service';
import { EntityService } from 'src/app/services/entity.service';
import { EntryFilterObject } from 'src/app/model/entry-filter-object';

@Component({
  selector: 'app-activity-full-list',
  templateUrl: './activity-full-list.component.html',
  styleUrls: ['./activity-full-list.component.css']
})
export class ActivityFullListComponent implements OnInit {

  cityId: number;
  cityName: string;
  activities: Activity[];
  cities: City[];
  filterObject = new EntryFilterObject();
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private cityService: GetCityService,
              private entityService: EntityService,
              private filterService: FilterService) { }

  ngOnInit(): void {

    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.activityImageUrls;

    this.cityService.cities.subscribe(cities => {
      this.cities = cities;
      this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
    });

    this.entityService.getActivities(this.cityId).subscribe(activities => this.activities = activities);
    this.filterObject.entryType = this.route.snapshot.url[2].path;
  }

  handleSubmit(receivedFilterObject: EntryFilterObject) {
    receivedFilterObject.cityId = this.cityId;
    this.filterObject = receivedFilterObject;
    this.filterObject.entryType = this.route.snapshot.url[2].path;
    this.filterService.filterResults(receivedFilterObject)
                      .subscribe(a => this.activities = a);
  }
}
