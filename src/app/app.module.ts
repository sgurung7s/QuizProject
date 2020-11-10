import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from '../app/components/question/question/question.component';
import { ChoiceComponent } from '../app/components/choice/choice/choice.component';
import { SummaryComponent } from '../app/summary/summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChoiceComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
