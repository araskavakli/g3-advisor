import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFullListComponent } from './hotel-full-list.component';

describe('HotelFullListComponent', () => {
  let component: HotelFullListComponent;
  let fixture: ComponentFixture<HotelFullListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
