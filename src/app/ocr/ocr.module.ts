import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrResultEditorComponent } from './components/ocr-result-editor/ocr-result-editor.component';
import { OcrResultReaderComponent } from './components/ocr-result-reader/ocr-result-reader.component';
import { QuickOcrComponent } from './components/quick-ocr/quick-ocr.component';
import { OcrInputComponent } from './components/ocr-input/ocr-input.component';
import { OcrOutputComponent } from './components/ocr-output/ocr-output.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OcrInputComponent,
    OcrOutputComponent,
    OcrResultEditorComponent,
    OcrResultReaderComponent,
    QuickOcrComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    QuickOcrComponent
  ]
})
export class OcrModule { }
