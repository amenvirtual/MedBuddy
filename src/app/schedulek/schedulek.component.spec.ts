import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulekComponent } from './schedulek.component';

describe('SchedulekComponent', () => {
  let component: SchedulekComponent;
  let fixture: ComponentFixture<SchedulekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
