import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObseverbalComponent } from './obseverbal.component';

describe('ObseverbalComponent', () => {
  let component: ObseverbalComponent;
  let fixture: ComponentFixture<ObseverbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObseverbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObseverbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
