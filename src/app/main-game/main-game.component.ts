import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';

import { Answer } from '../model/answer';
import { GameServiceService } from '../game.service';
import { LightBulb } from '../model/lightBulb';
import { LightbulbService } from '../lightbulb.service';
//import { QuestionAndAnswers } from './question-and-answers';

@Component({
  selector: 'main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})

export class MainGameComponent implements OnInit {

  private BLINK_SPEED: number = 300;
  private NUMBER_OF_BLINKS: number = 3;
  private DEFAULT_TIME_LIMIT: number = 5 * 1000;

  // Control lightbulbs
  private lightbulbs: LightBulb[];
  
  // Control tournament
  private teamNames: string[];
  private teamScores: number[];
  private teamImages: string[];
  private animations: string[][];
  private animationDurations: number[][];
  private animationSongs: any[][];
  private adults: boolean = true;
  private currentGame: number = 0;
  
  // Control current game
  private t1Name: string;
  private t1Score: number;
  private t1Image: string;
  private t2Name: string;
  private t2Score: number;
  private t2Image: string;
  
  // Control current question
  private gameScore: number;
  private numberOfStrikes: number;
  private gameActive: boolean;
  private currentQuestion: number = 0;
  private answers: Answer[];
  private timerActive: boolean;
  
  // Sound Effects
  private themeSong: any;
  private clang: any;
  private strike: any;
  private win: any;
  private newQuestion: any;
  private loadAnswer: any;
  
  private showAnimation: boolean = false;
  private animation: string;
  private animationDuration: number;
  private animationIndex: number = 0;
  private animationIndeces: number[];

  // References to Modals
  @ViewChild('strikes') strikesTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2,
    private gameService: GameServiceService,
    private lightbulbService: LightbulbService) {}

  ngOnInit() {
    this.teamNames = [];
    this.teamScores = [];
    this.teamImages = [];

    // Initial Setup
    this.teamNames.push("Reindeers");
    this.teamNames.push("Elves");
    this.teamNames.push("Santa");
    this.teamNames.push("Snowmen");

    this.teamImages.push("/assets/images/reindeer.png");
    this.teamImages.push("/assets/images/elf.png");
    this.teamImages.push("/assets/images/santa.png");
    this.teamImages.push("/assets/images/snowman3.png");

    this.animations = [];
    this.animations.push(this.createAnimations([
      "/assets/images/animated/reindeer01.gif",
      "/assets/images/animated/reindeer02.gif",
      "/assets/images/animated/reindeer03.gif",
      "/assets/images/animated/reindeer04.gif"]));
    
    this.animations.push(this.createAnimations([
      "/assets/images/animated/elf01.gif",
      "/assets/images/animated/elf02.gif",
      "/assets/images/animated/elf03.gif",
      "/assets/images/animated/elf04.gif"]));
    
    this.animations.push(this.createAnimations([
      "/assets/images/animated/santa01.gif",
      "/assets/images/animated/santa02.gif",
      "/assets/images/animated/santa03.gif",
      "/assets/images/animated/santa04.gif"]));
    
    this.animations.push(this.createAnimations([
      "/assets/images/animated/snowman01.gif",
      "/assets/images/animated/snowman02.gif",
      "/assets/images/animated/snowman03.gif",
      "/assets/images/animated/snowman04.gif"]));

    this.animationSongs = [];
    this.animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
    this.animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/JingleBells.mp3",
      "/assets/sound_effects/animation_songs/JingleBells.mp3",
      "/assets/sound_effects/animation_songs/JingleBells.mp3",
      "/assets/sound_effects/animation_songs/JingleBells.mp3"]));
    this.animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
    this.animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
                  
    this.animationDurations = [];
    let DEFAULT_DURATION: number = 12;
    this.animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    this.animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    this.animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    this.animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));

    this.animationIndeces = [];
    this.animationIndeces.push(0);
    this.animationIndeces.push(0);
    this.animationIndeces.push(0);
    this.animationIndeces.push(0);
    
    this.loadEmptyBoard();
    this.loadSoundEffects();
    this.lightbulbs = this.lightbulbService.initializeLightbulbs();
  }

  public createAnimations(animationUrls: string[]) : string[] {
    let animations: string[] = [];
    for (let i = 0; i < animationUrls.length; i++) {
      animations.push(animationUrls[i]);
    }
    return animations;
  }

  public createAnimationDurations(animationDurations: number[]) : number[] {
    let durations: number[] = [];
    for (let i = 0; i < animationDurations.length; i++) {
      durations.push(animationDurations[i]);
    }
    return durations;
  }

  public createAnimationSongs(animationSongUrls: string[]) : any[] {
    let animationSongs: any[] = [];
    for (let i = 0; i < animationSongUrls.length; i++) {
      let song = new Audio();
      song.src = animationSongUrls[i];
      song.load();
      animationSongs.push(song);
    }
    return animationSongs;
  }

  private displayStrikes() {
    let strikes = this.strikesTag.nativeElement;
    this.renderer.setStyle(strikes, 'display', 'block');
    this.renderer.setStyle(strikes, 'left', "calc( 50% - " + (100 * this.numberOfStrikes) + "px )");
    var that = this;
    setTimeout(function() {
      that.hideStrikeBox();
      that.resetNumberOfStrikes();
    }, 1000);
  }

  private guessedCorrect(answer: Answer) {
    this.timerActive = false;
    this.gameScore += answer.Value;
  }

  private guessedWrong() {
    this.timerActive = false;
    this.strike.play();
    this.numberOfStrikes++;
    this.displayStrikes();
  }

  private hideStrikeBox() {
    let strikes = this.strikesTag.nativeElement;
    this.renderer.setStyle(strikes, 'display', 'none');
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("Entred AppComponent.keyEvent()");
    if (event && !this.modalOpen) {
      if (event.key == '1') this.revealAnswer(this.answers[0]);
      if (event.key == '2') this.revealAnswer(this.answers[1]);
      if (event.key == '3') this.revealAnswer(this.answers[2]);
      if (event.key == '4') this.revealAnswer(this.answers[3]);
      if (event.key == '5') this.revealAnswer(this.answers[4]);
      if (event.key == '6') this.revealAnswer(this.answers[5]);
      if (event.key == '7') this.revealAnswer(this.answers[6]);
      if (event.key == '8') this.revealAnswer(this.answers[7]);
      if (event.key.toUpperCase() == 'A' && this.gameActive) this.teamWins(1);
      if (event.key.toUpperCase() == 'B' && this.gameActive) this.teamWins(2);
      if (event.key.toUpperCase() == 'X' && this.gameActive) this.guessedWrong();
      if (event.key.toUpperCase() == 'Q' && !this.gameActive) this.loadNextQuestion();
      // TODO: Test only remove next line
      //if (event.key.toUpperCase() == 'Q') this.loadNextQuestion();
      if (event.key.toUpperCase() == 'N' && !this.gameActive) this.loadNewGame();
      if (event.key.toUpperCase() == 'R') this.numberOfStrikes = 0;
      if (event.key.toUpperCase() == 'W') this.themeSong.play();
      if (event.key.toUpperCase() == 'T') {
        this.timerActive = true;
        let that = this;
        setTimeout(function() { 
          if (that.timerActive)
            that.guessedWrong(); 
        }, this.DEFAULT_TIME_LIMIT);
        // TODO: change this to do the timer
        /*
        this.animation = this.animations[Math.floor(this.animationIndex / 4)][Math.floor(this.animationIndex % 4)];
        this.animationIndex++;
        this.showAnimation = true;
        */
      }
      /*
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
    this.t1Score = null;
    this.t2Score = null;
    this.numberOfStrikes = 0;
    this.gameScore = 0;
  }

  private loadNewGame() {
    if (this.currentGame == 0) {
      this.t1Name = this.teamNames[0];
      this.t2Name = this.teamNames[1];
      this.t1Image = this.teamImages[0];
      this.t2Image = this.teamImages[1];
    }
    if (this.currentGame == 1) {
      // Record the old values for the bracket
      this.teamScores[0] = this.t1Score ? this.t1Score : 0;
      this.teamScores[1] = this.t2Score ? this.t2Score : 0;
      if (this.t1Score > this.t2Score) {
        this.teamNames[4] = this.t1Name;
        this.teamImages[4] = this.t1Image;
      } else {
        this.teamNames[4] = this.t2Name;
        this.teamImages[4] = this.t2Image;
      }
      // Setup the new game
      this.t1Name = this.teamNames[2];
      this.t2Name = this.teamNames[3];
      this.t1Image = this.teamImages[2];
      this.t2Image = this.teamImages[3];
    }
    if (this.currentGame == 2) {
      // Record the old values for the bracket
      this.teamScores[2] = this.t1Score ? this.t1Score : 0;
      this.teamScores[3] = this.t2Score ? this.t2Score : 0;
      if (this.t1Score > this.t2Score) {
        this.teamNames[5] = this.t1Name;
        this.teamImages[5] = this.t1Image;
      } else {
        this.teamNames[5] = this.t2Name;
        this.teamImages[5] = this.t2Image;
      }
      // Setup the new game
      this.t1Name = this.teamNames[4];
      this.t2Name = this.teamNames[5];
      this.t1Image = this.teamImages[4];
      this.t2Image = this.teamImages[5];
    }

    if (this.currentGame == 3) {
      // Record the old values for the bracket
      this.teamScores[4] = this.t1Score ? this.t1Score : 0;
      this.teamScores[5] = this.t2Score ? this.t2Score : 0;
      if (this.t1Score > this.t2Score) {
        this.teamNames[6] = this.t1Name;
      } else {
        this.teamNames[6] = this.t2Name;
      }
    }

    this.t1Score = null;
    this.t2Score = null;
    this.loadEmptyBoard();
    this.currentGame++;
    // TODO: Play sound effect
  }

  private loadNextQuestion() {
    this.answers = this.gameService.loadQuestion(++this.currentQuestion);
    this.gameActive = true;
    this.gameScore = 0;
    this.numberOfStrikes = 0;
  }

  private loadSoundEffects() {

    this.themeSong = new Audio();
    this.themeSong.src = "/assets/sound_effects/ThemeSongShort.wav";
    this.themeSong.load();
    
    this.clang = new Audio();
    this.clang.src = "/assets/sound_effects/clang.wav";
    this.clang.load();

    this.strike = new Audio();
    this.strike.src = "/assets/sound_effects/strike.wav";
    this.strike.load();

    this.win = new Audio();
    this.win.src = "/assets/sound_effects/win.wav";
    this.win.load();

    this.newQuestion = new Audio();
    this.newQuestion.src = "/assets/sound_effects/strike.wav";
    this.newQuestion.load();

    this.loadAnswer = new Audio();
    this.loadAnswer.src = "/assets/sound_effects/strike.wav";
    this.loadAnswer.load();
  }

  private resetNumberOfStrikes() {
    if (this.numberOfStrikes >= 3) {
      this.numberOfStrikes = 0;
    }
  }

  private revealAnswer(answer: Answer) {
    if (this.gameActive && answer.Status == 1) {
      this.guessedCorrect(answer);
    }
    this.showAnswer(answer);
  }

  private showAnswer(answer: Answer) {
    if (answer.Status == 1) {
      this.clang.play();
      answer.Status = 2;
    }
  }

  private showLightbulbDetails(lightbulb: LightBulb) {
    //alert(JSON.stringify(lightbulb));
  }

  private teamWins(teamNumber: number) {
    let winningTeam: string;
    if (teamNumber == 1) {
      winningTeam = this.t1Name;
      if (!this.t1Score) {
        this.t1Score = 0;
      }
      this.t1Score += this.gameScore;
    } else if (teamNumber == 2) {
      winningTeam = this.t2Name;
      if (!this.t2Score) {
        this.t2Score = 0;
      }
      this.t2Score += this.gameScore;
    } 
    this.win.play();
    this.lightbulbService.blink(this.lightbulbs, this.NUMBER_OF_BLINKS * 2, this.BLINK_SPEED);
    this.gameActive = false;

    let index: number;
    if (winningTeam == this.teamNames[0]) index = 0;
    if (winningTeam == this.teamNames[1]) index = 1;
    if (winningTeam == this.teamNames[2]) index = 2;
    if (winningTeam == this.teamNames[3]) index = 3;

    this.animation = this.animations[index][(this.animationIndeces[index]++) % 4];
    this.animationDuration = this.animationDurations[index][(this.animationIndeces[index]++) % 4]  * 1000;
    this.animationSongs[index][(this.animationIndeces[index]++) % 4].play();
    this.showAnimation = true;
  }

  private hideAnimationModal() {
    this.showAnimation = false;
  }

}