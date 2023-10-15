import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocr-output',
  templateUrl: './ocr-output.component.html',
  styleUrls: ['./ocr-output.component.css']
})
export class OcrOutputComponent {
  @Input() results: string[] = [];

  updateResult(index: number, event: string): void {
    console.log('updateResult', index, event)
    this.results[index] = event;
  }

  moveResultUp(index: number): void {
    if (index <= 0) {
      return;
    }

    const k = this.results[index - 1];
    this.results[index - 1] = this.results[index];
    this.results[index] = k;
  }

  deleteResult(index: number): void {
    if (index > -1) {
      this.results.splice(index, 1);
    }
  }

  moveResultDown(index: number): void {
    if (index >= this.results.length - 1) {
      return;
    }

    const k = this.results[index + 1];
    this.results[index + 1] = this.results[index];
    this.results[index] = k;
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}
