import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import {DUMMY_DATA} from './data/dummy-data';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('pageState', [
      state('inactive', style({
        boxShadow: '0 1px 3px #aaa',
        border: '1px solid grey',
        transform: 'scale(1)'
      })),
      state('active',   style({
        boxShadow: '0 2px 5px #aaa',
        border: '1px solid green',
        transform: 'scale(1.4)',
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class AppComponent {
  questions = DUMMY_DATA;
  summary = {};
  selections = {};
  showSummary = false;
  option = false;
  activeSlideIndex = 0;
  correct = [2,2,0,1];
  score = 0;

  constructor() {
  }

  onSelected(questionIdx, choiceIdx) {
    this.summary[questionIdx] =
      this.questions[questionIdx].choices[choiceIdx].summary;

    this.selections[questionIdx] = choiceIdx;

    if(this.questions[questionIdx].choices[choiceIdx].summary == 'Correct!'){
        this.score += 1;
    }

    if (Object.keys(this.selections).length === this.questions.length) {
      this.activeSlideIndex = 0;
      this.showSummary = true;
    } else {
      // FOR AUTO change question
      if (this.activeSlideIndex === this.questions.length - 1 && this.option) {
        this.activeSlideIndex = 0;
      } else if (this.option) {
        this.activeSlideIndex += 1;
      }
    }
  }

  changeActiveSlide(index) {
    this.activeSlideIndex = index;
  }

  resetQuiz() {
    this.showSummary = false;
    this.selections = {};
    this.summary = {};
    this.score = 0;
  }

  getSummary() {
    const limit = Object.keys(this.summary).length;
    let summary = 'Correct Answers: ';
    let explanation = '';

    for (let index = 0; index < limit; index++) {
    }

    summary += this.score;

    return summary;
  }

  getExplanation() {
    const limit = Object.keys(this.summary).length;
    let summary = 'Correct Answers: ';
    let explanation = [];

    for (let index = 0; index < limit; index++) {
      if (this.summary[index] != "Correct!"){
        explanation.push(`${this.summary[index]}`);
      }
    }

    //summary += this.score;

    return explanation;
  }
}
