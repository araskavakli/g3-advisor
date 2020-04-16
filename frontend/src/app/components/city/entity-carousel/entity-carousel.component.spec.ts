import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCarouselComponent } from './entity-carousel.component';

describe('EntityCarouselComponent', () => {
  let component: EntityCarouselComponent;
  let fixture: ComponentFixture<EntityCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
