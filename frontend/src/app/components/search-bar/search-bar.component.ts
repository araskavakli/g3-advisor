import { GetCityService } from '../../services/get-city.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  enteredCityName: string;
  cities: City[];

  constructor(private cityService: GetCityService,
              private router: Router) { }

  ngOnInit(): void {
    this.cityService.cities.subscribe(cities => this.cities = cities);
  }

  onEnter(userInput: string): void {
    const searchedCityCapitalized = this.capitalizeFirstLetter(userInput);
    try {
      const searchedCityId = this.cityService.getCityIdByName(this.cities, searchedCityCapitalized);
      this.router.navigate([`cities/${searchedCityId}`]);
    } catch {
      this.router.navigate([`cities`]);
    }
  }

  onClick(userInput: string): void {
    this.onEnter(userInput);
  }

  goToRandomCity(): void {
    const min = 1;
    const max = this.cities.length;
    const randCityId = Math.floor(Math.random() * (max - min + 1) + min);
    this.router.navigate([`cities/${randCityId}`]);
  }

  capitalizeFirstLetter(userInput: string): string {
    const firstCharUpperCase = userInput.charAt(0).toUpperCase();
    return firstCharUpperCase + userInput.substring(1).toLowerCase();
  }
}
