import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecognizeResult, createWorker } from 'tesseract.js';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  scanSubject$: Subject<string> = new Subject<string>();
  constructor() { }

  async scan(language: Language, image: any): Promise<void> {
    const worker = await createWorker(language.code);
    await worker.recognize(image).then((result: RecognizeResult | void) => {
      this.scanSubject$.next(result?.data?.text || '');
    });
    await worker.terminate();
  }
}
