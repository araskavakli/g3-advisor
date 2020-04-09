import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightseeingListComponent } from './sightseeing-list.component';

describe('SightseeingListComponent', () => {
  let component: SightseeingListComponent;
  let fixture: ComponentFixture<SightseeingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightseeingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightseeingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
