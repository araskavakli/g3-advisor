import { Sightseeing } from '../../../../model/sightseeing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from 'src/app/services/entity.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-sightseeing-list',
  templateUrl: './sightseeing-list.component.html',
  styleUrls: ['./sightseeing-list.component.css']
})
export class SightseeingListComponent implements OnInit {

  cityId: number;
  sightseeings: Sightseeing[];
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private entityService: EntityService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.sightseeingImageUrls;
    this.entityService.getSightseeings(this.cityId).subscribe(sightseeings => {
      this.sightseeings = _.shuffle(sightseeings).slice(0, 5);
    });
  }
}
