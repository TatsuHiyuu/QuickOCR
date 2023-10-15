import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrResultReaderComponent } from './ocr-result-reader.component';

describe('OcrResultReaderComponent', () => {
  let component: OcrResultReaderComponent;
  let fixture: ComponentFixture<OcrResultReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrResultReaderComponent]
    });
    fixture = TestBed.createComponent(OcrResultReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
