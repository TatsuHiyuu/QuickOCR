import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Language } from '../../interfaces/language';
import { English, French, Languages, Norwegian } from '../../models/languages.model';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() languageSelected: EventEmitter<Language> = new EventEmitter<Language>()
  languages: Language[] = Languages;
  selectedLanguage: Language = this.languages[0];

  ngOnInit(): void {
    this.languageSelected.emit(this.selectedLanguage);
  }

  onLanguageSelected(event: any): void {
    const index: number | undefined = event?.target?.value;
    if (index) {
      this.selectedLanguage = this.languages[index];
      this.languageSelected.emit(this.selectedLanguage);
    }
  }

}
