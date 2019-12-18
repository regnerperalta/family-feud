import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Answer } from '../model/answer';
import { GameService } from '../game.service';
import { LightBulb } from '../model/lightBulb';
import { LightbulbService } from '../lightbulb.service';

@Component({
  selector: 'fast-money',
  templateUrl: './fast-money.component.html',
  styleUrls: ['./fast-money.component.css']
})

export class FastMoneyComponent implements OnInit {

  private answers: Answer[];
  private lightbulbs: LightBulb[];
  
  private total: number;
  private seconds: number = 20;
  private sub: Subscription;
  private currentAnswer: string = '';
  private currentAnswerIndex: number = 0;

  // Sound Effects
  private clang: any;
  private strike: any;
  
  constructor(private renderer: Renderer2,
    private gameService: GameService,
    private lightbulbService: LightbulbService) {}

  ngOnInit() {
    this.loadEmptyBoard();
    this.loadSoundEffects();
    this.answers = [];
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push(this.createEmptyAnswer());
    this.answers.push();
    this.lightbulbs = this.lightbulbService.initializeLightbulbs();
    for (let i = 0; i < this.lightbulbs.length; i++) {
      this.lightbulbs[i].Class = "lightbulb light_blue";
    }
  }

  private startTimer(limit: number) {
    let timer = Observable.timer(1, 1000);
    this.sub = timer.subscribe(
        t => {
            console.log('t: ' + t);
            if (t < limit) {
              this.seconds = limit - t;
            } else if (t == limit) {
              this.seconds = limit - t;
              // TODO - play sound effect
            }
        }
    );
  }

  private createEmptyAnswer(): Answer {
    let answer = new Answer();
    answer.Status = 0;
    return answer;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("Entred AppComponent.keyEvent(" + event.key + ")");
    if (event) {
      if (event.key == 'Enter') {
        this.showAnswer();
      } else {
        this.currentAnswer += event.key;
      }
      /*
      if (event.key == '2') this.revealAnswer(this.answers[1]);
      if (event.key == '3') this.revealAnswer(this.answers[2]);
      if (event.key == '4') this.revealAnswer(this.answers[3]);
      if (event.key == '5') this.revealAnswer(this.answers[4]);
      if (event.key == '6') this.revealAnswer(this.answers[5]);
      if (event.key == '7') this.revealAnswer(this.answers[6]);
      if (event.key == '8') this.revealAnswer(this.answers[7]);
      if (event.key.toUpperCase() == 'A') this.teamWins(1);
      if (event.key.toUpperCase() == 'B') this.teamWins(2);
      if (event.key.toUpperCase() == 'Q') this.loadNextQuestion();
      if (event.key.toUpperCase() == 'S') this.openSetupModal();
      if (event.key.toUpperCase() == 'N') this.loadNewGame();
      if (event.key.toUpperCase() == 'O') this.lightbulbService.toggleAllLights(this.lightbulbs);
      if (event.key.toUpperCase() == 'Z') this.lightbulbService.blink(this.lightbulbs, this.NUMBER_OF_BLINKS, this.BLINK_SPEED);
      if (event.key.toUpperCase() == 'U') this.lightbulbService.toggleBottomToTop(this.lightbulbs, 29, this.TOGGLE_SPEED);
      if (event.key.toUpperCase() == 'L') this.lightbulbService.toggleLeftToRight(this.lightbulbs, 0, this.TOGGLE_SPEED);
      if (event.key.toUpperCase() == 'R') this.lightbulbService.toggleRightToLeft(this.lightbulbs, 49, this.TOGGLE_SPEED);
      if (event.key.toUpperCase() == 'T') this.lightbulbService.toggleTopToBottom(this.lightbulbs, 0, this.TOGGLE_SPEED);
      if (event.key.toUpperCase() == 'U') this.lightbulbService.toggleBottomToTop(this.lightbulbs, 29, this.TOGGLE_SPEED);
      */
    } 
  }

  private loadEmptyBoard() {
    this.answers = this.gameService.loadEmptyBoard();
  }

  private loadSoundEffects() {
    this.clang = new Audio();
    this.clang.src = "/assets/sound_effects/clang.wav";
    this.clang.load();
    this.strike = new Audio();
    this.strike.src = "/assets/sound_effects/strike.wav";
    this.strike.load();
  }

  private showAnswer() {
    this.answers[this.currentAnswerIndex].Text = this.currentAnswer;
    this.currentAnswerIndex++;
    this.currentAnswer = '';
    // TODO - Play sound effect
  }

  private showLightbulbDetails(lightbulb: LightBulb) {
    alert(JSON.stringify(lightbulb));
  }

  private teamWins(teamNumber: number) {

  }

}