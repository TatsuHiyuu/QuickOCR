import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ocr-result-reader',
  templateUrl: './ocr-result-reader.component.html',
  styleUrls: ['./ocr-result-reader.component.css']
})
export class OcrResultReaderComponent {
  @Input() results: string[] = [];

  async copyOutput(): Promise<void> {
    await navigator.clipboard.writeText(this.results.join('\r\n') || '');
  }
}
