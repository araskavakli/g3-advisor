import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLevelComponent } from './price-level.component';

describe('PriceLevelComponent', () => {
  let component: PriceLevelComponent;
  let fixture: ComponentFixture<PriceLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
