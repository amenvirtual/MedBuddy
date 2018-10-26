import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulehComponent } from './scheduleh.component';

describe('SchedulehComponent', () => {
  let component: SchedulehComponent;
  let fixture: ComponentFixture<SchedulehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
