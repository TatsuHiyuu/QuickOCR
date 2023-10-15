import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOcrComponent } from './quick-ocr.component';

describe('QuickOcrComponent', () => {
  let component: QuickOcrComponent;
  let fixture: ComponentFixture<QuickOcrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickOcrComponent]
    });
    fixture = TestBed.createComponent(QuickOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
