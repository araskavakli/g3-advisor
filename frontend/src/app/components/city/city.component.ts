import { GetCityService } from '../../services/get-city.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: City[];
  cityId: number;
  cityName: string;

  constructor(private cityService: GetCityService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cityService.cities.subscribe(cities => {

      this.cityId = Number(this.route.snapshot.paramMap.get('id'));

      if (cities.filter(city => city.cityId === this.cityId).length !== 0) {
        this.cities = cities;
        this.cityName = this.cityService.getCityNameById(cities, this.cityId);
      } else {
        this.router.navigate(['cities/']);
      }
    });
  }
}
