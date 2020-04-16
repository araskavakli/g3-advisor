import { EntityService } from 'src/app/services/entity.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-slideshow',
  templateUrl: './entity-slideshow.component.html',
  styleUrls: ['./entity-slideshow.component.css']
})
export class EntitySlideshowComponent implements OnInit {

  @Input()
  entityType: string;

  entitySlideShowImageUrls: string [];

  constructor(private entityService: EntityService) { }

  ngOnInit(): void {
    if (this.entityType === 'hotel') {
      this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.hotelImageUrls;
    } else if (this.entityType === 'restaurant') {
      this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.restaurantImageUrls;
    } else if (this.entityType === 'activity') {
      this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.activityImageUrls;
    } else if (this.entityType === 'sightseeing') {
      this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.sightseeingImageUrls;
    }
  }

}
