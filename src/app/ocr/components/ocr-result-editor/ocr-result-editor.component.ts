import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-ocr-result-editor',
  templateUrl: './ocr-result-editor.component.html',
  styleUrls: ['./ocr-result-editor.component.css'],
  animations: [
    trigger('visibleHidden', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
      state(
        'void, hidden',
        style({
          opacity: 0,
          transform: 'translateY(-25%)'
        })
      ),
      transition('* => visible', animate('250ms')),
      transition('* => void, * => hidden', animate('250ms')),
    ])
  ]
})
export class OcrResultEditorComponent implements OnInit {
  @Input() result: string = ''
  @Input() index: number = 0;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Output() modified: EventEmitter<string> = new EventEmitter<string>();
  @Output() movedUp: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() movedDown: EventEmitter<void> = new EventEmitter<void>();
  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  isVisible: boolean = false;

  ngOnInit(): void {
    this.isVisible = true;
  }

  update(event: any): void {
    this.modified.emit(event?.target?.value || '')
  }

  moveResultUp(): void {
    this.movedUp.emit()
  }

  async copyResult(): Promise<void> {
    await navigator.clipboard.writeText(this.result || '');
  }

  deleteResult(): void {
    this.deleted.emit()
  }

  moveResultDown(): void {
    this.movedDown.emit()
  }

  removeLineBreaks(): void {
    this.result = this.result?.replace(/\r?\n|\r/g, " ");
  }
}
