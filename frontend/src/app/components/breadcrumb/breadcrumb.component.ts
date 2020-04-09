import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  showCountry: boolean;

  @Input()
  cityName: string;

  @Input()
  cityId: number;

  @Input()
  entityType: string;

  @Input()
  entityId: number;

  @Input()
  entityName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
