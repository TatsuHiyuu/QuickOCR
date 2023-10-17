import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OcrModule } from './ocr/ocr.module';
import { FormsModule } from '@angular/forms';
import { TopNavbarComponent } from './core/components/top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OcrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
