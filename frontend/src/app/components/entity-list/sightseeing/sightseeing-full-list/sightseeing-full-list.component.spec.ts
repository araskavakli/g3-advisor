import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightseeingFullListComponent } from './sightseeing-full-list.component';

describe('SightseeingFullListComponent', () => {
  let component: SightseeingFullListComponent;
  let fixture: ComponentFixture<SightseeingFullListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightseeingFullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightseeingFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
