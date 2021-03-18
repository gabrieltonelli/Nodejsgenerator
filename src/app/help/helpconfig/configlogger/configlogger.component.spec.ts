import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigloggerComponent } from './configlogger.component';

describe('ConfigloggerComponent', () => {
  let component: ConfigloggerComponent;
  let fixture: ComponentFixture<ConfigloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
