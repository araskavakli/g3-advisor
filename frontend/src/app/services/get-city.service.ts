import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { City } from '../model/city';
import { CityImageUrls } from 'src/assets/cityImageUrls';

const apiRoot = 'http://localhost:8080/cities/';

@Injectable({
  providedIn: 'root'
})
export class GetCityService {

  cityImageUrls: string[];
  cities = new ReplaySubject<City[]>(1);

  constructor(private http: HttpClient,
              private router: Router) {

    const cityImageUrls = new CityImageUrls();
    this.cityImageUrls = cityImageUrls.urlList;

    this.getCityData().subscribe(cities => {
      this.cities.next(cities);
    });
  }

  getCityData(): Observable<City[]> {
    return this.http.get<City[]>(apiRoot);
  }

  getCityNameById(cities: City[], cityId: number): string {
    try {
      return cities.filter(city => city.cityId === cityId)[0].name;
    } catch {
      this.router.navigate([`cities`]);
    }
  }

  getCityIdByName(cities: City[], cityName: string): number {
    return cities.filter(city => city.name === cityName)[0].cityId;
  }

}
