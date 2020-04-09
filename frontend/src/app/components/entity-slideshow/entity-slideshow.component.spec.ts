import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySlideshowComponent } from './entity-slideshow.component';

describe('EntitySlideshowComponent', () => {
  let component: EntitySlideshowComponent;
  let fixture: ComponentFixture<EntitySlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
