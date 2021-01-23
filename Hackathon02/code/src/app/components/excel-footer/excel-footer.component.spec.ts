import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFooterComponent } from './excel-footer.component';

describe('ExcelFooterComponent', () => {
  let component: ExcelFooterComponent;
  let fixture: ComponentFixture<ExcelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
