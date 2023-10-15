import { Component, OnInit } from '@angular/core';
import { Page, RecognizeResult, createWorker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quick-ocr';
}

