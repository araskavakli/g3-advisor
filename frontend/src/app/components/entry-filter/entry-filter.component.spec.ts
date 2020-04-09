import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFilterComponent } from './entry-filter.component';

describe('EntryFilterComponent', () => {
  let component: EntryFilterComponent;
  let fixture: ComponentFixture<EntryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
