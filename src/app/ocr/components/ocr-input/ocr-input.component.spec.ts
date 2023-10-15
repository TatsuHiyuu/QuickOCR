import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrInputComponent } from './ocr-input.component';

describe('OcrInputComponent', () => {
  let component: OcrInputComponent;
  let fixture: ComponentFixture<OcrInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrInputComponent]
    });
    fixture = TestBed.createComponent(OcrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
