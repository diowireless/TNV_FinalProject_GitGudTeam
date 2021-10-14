import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesByLocationComponent } from './movies-by-location.component';

describe('MoviesByLocationComponent', () => {
  let component: MoviesByLocationComponent;
  let fixture: ComponentFixture<MoviesByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
