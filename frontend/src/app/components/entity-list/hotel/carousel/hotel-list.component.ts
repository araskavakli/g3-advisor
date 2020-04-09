import { Component, OnInit } from '@angular/core';
import { EntityService } from 'src/app/services/entity.service';
import { Hotel } from 'src/app/model/hotel';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  cityId: number;
  hotels: Hotel[];
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private entityService: EntityService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.hotelImageUrls;
    this.entityService.getHotels(this.cityId).subscribe(hotels => {
      this.hotels = _.shuffle(hotels).slice(0, 5);
    });
  }
}
