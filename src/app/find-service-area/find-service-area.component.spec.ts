import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindServiceAreaComponent } from './find-service-area.component';

describe('FindServiceAreaComponent', () => {
  let component: FindServiceAreaComponent;
  let fixture: ComponentFixture<FindServiceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindServiceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
