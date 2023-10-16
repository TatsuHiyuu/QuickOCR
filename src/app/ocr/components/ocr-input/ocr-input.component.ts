import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Language } from '../../interfaces/language';

@Component({
  selector: 'app-ocr-input',
  templateUrl: './ocr-input.component.html',
  styleUrls: ['./ocr-input.component.css']
})
export class OcrInputComponent {
  @ViewChild('fileSelector') fileSelector: ElementRef | undefined;
  @Output() uploadedImage: EventEmitter<File> = new EventEmitter<File>();
  @Output() languageSelected: EventEmitter<Language> = new EventEmitter<Language>();

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      const file: File | undefined = fileList[0]
      this.uploadedImage.emit(file)
    }
  }

  clear(): void {
    this.fileSelector!.nativeElement!.value = '';
  }

  onLanguageSelected(language: Language): void {
    this.languageSelected.emit(language);
  }
}
