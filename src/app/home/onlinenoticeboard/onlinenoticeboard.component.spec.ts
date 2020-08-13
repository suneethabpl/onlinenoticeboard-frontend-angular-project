import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinenoticeboardComponent } from './onlinenoticeboard.component';

describe('OnlinenoticeboardComponent', () => {
  let component: OnlinenoticeboardComponent;
  let fixture: ComponentFixture<OnlinenoticeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinenoticeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinenoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
