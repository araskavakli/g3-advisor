import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from 'src/app/services/entity.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  cityId: number;
  activities: Activity[];
  urlList: string[];

  constructor(private route: ActivatedRoute,
              private entityService: EntityService) { }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.urlList = this.entityService.entityImageUrls.activityImageUrls;
    this.entityService.getActivities(this.cityId).subscribe(activities => {
      this.activities = _.shuffle(activities).slice(0, 5);
    });
  }
}
