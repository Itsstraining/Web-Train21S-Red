import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootHeadComponent } from './foot-head.component';

describe('FootHeadComponent', () => {
  let component: FootHeadComponent;
  let fixture: ComponentFixture<FootHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
