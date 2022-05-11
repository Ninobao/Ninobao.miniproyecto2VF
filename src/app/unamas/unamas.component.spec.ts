import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnamasComponent } from './unamas.component';

describe('UnamasComponent', () => {
  let component: UnamasComponent;
  let fixture: ComponentFixture<UnamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
