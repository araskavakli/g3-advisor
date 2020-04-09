import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFullListComponent } from './activity-full-list.component';

describe('ActivityFullListComponent', () => {
  let component: ActivityFullListComponent;
  let fixture: ComponentFixture<ActivityFullListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
