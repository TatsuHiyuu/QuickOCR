import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrResultEditorComponent } from './ocr-result-editor.component';

describe('OcrResultEditorComponent', () => {
  let component: OcrResultEditorComponent;
  let fixture: ComponentFixture<OcrResultEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrResultEditorComponent]
    });
    fixture = TestBed.createComponent(OcrResultEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
