import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleUserComponent } from './handle-user.component';

describe('HandleUserComponent', () => {
  let component: HandleUserComponent;
  let fixture: ComponentFixture<HandleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
