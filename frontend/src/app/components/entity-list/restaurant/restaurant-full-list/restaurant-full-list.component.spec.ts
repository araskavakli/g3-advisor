import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFullListComponent } from './restaurant-full-list.component';

describe('RestaurantFullListComponent', () => {
  let component: RestaurantFullListComponent;
  let fixture: ComponentFixture<RestaurantFullListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
