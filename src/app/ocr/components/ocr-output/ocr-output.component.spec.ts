import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrOutputComponent } from './ocr-output.component';

describe('OcrOutputComponent', () => {
  let component: OcrOutputComponent;
  let fixture: ComponentFixture<OcrOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrOutputComponent]
    });
    fixture = TestBed.createComponent(OcrOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
