import { Component, OnInit } from '@angular/core';
import { GetCityService } from 'src/app/services/get-city.service';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent implements OnInit {

  cities: City[];
  imageUrlList: string[];

  constructor(private cityService: GetCityService) { }

  ngOnInit(): void {
    this.cityService.getCityData().subscribe(cities => this.cities = cities);
    this.imageUrlList = this.cityService.cityImageUrls;
  }
}

