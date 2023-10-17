import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Language } from '../../interfaces/language';

@Component({
  selector: 'app-ocr-input',
  templateUrl: './ocr-input.component.html',
  styleUrls: ['./ocr-input.component.css']
})
export class OcrInputComponent implements OnInit {
  @ViewChild('fileSelector') fileSelector: ElementRef | undefined;
  @Output() uploadedImage: EventEmitter<File> = new EventEmitter<File>();
  @Output() languageSelected: EventEmitter<Language> = new EventEmitter<Language>();
  selectedLanguage: Language | undefined;
  isCameraAvailable: boolean = false;

  async ngOnInit(): Promise<void> {
    await this.checkCameraAvailability();
  }

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
    this.selectedLanguage = language;
    this.languageSelected.emit(language);
  }

  private async checkCameraAvailability(): Promise<void> {
    await navigator.mediaDevices.getUserMedia({ video: true }).then((x) => {
      console.log('x', x)
      this.isCameraAvailable = true;
    });
  }
}
