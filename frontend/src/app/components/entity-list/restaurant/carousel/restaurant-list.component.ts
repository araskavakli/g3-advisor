import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/services/entity.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import * as _ from 'lodash';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  cityId: number;
  restaurants: Restaurant[];
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private entityService: EntityService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.restaurantImageUrls;
    this.entityService.getRestaurants(this.cityId).subscribe(restaurants => {
      this.restaurants = _.shuffle(restaurants).slice(0, 5);
    });
  }
}
