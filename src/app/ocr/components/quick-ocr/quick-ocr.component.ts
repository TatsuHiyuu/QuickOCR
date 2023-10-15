import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { OcrService } from '../../services/ocr.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-quick-ocr',
  templateUrl: './quick-ocr.component.html',
  styleUrls: ['./quick-ocr.component.css']
})
export class QuickOcrComponent implements OnInit, OnDestroy {
  private destroyed: Subject<void> = new Subject();
  results: string[] = [];
  isLoading: boolean = false;

  constructor(private ocrService: OcrService) { }

  ngOnInit(): void {
    this.ocrService.scanSubject$.pipe(takeUntil(this.destroyed)).subscribe((text: string) => {
      this.results.push(text);
    })
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  @HostListener('window:paste', ['$event'])
  onPaste(event: any): void {
    if (this.isLoading) {
      return;
    }

    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        const blob = item.getAsFile();
        this.scan(blob);
      }
    }
  }

  onUploaded(blob: File): void {
    this.scan(blob);
  }

  private scan(blob: File): void {
    this.isLoading = true;
    this.ocrService.scan(blob).then(() => this.isLoading = false);
  }
}
