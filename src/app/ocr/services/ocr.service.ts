import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecognizeResult, createWorker } from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  scanSubject$: Subject<string> = new Subject<string>();
  constructor() { }

  async scan(image: any): Promise<void> {
    const worker = await createWorker('eng');
    const result: RecognizeResult | void = await worker.recognize(image).then((result: RecognizeResult | void) => {
      this.scanSubject$.next(result?.data?.text || '');
    });
    await worker.terminate();
  }
}
