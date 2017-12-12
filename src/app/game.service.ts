import { Injectable } from '@angular/core';

import { Answer } from './model/answer';

@Injectable()
export class GameServiceService {

  private answers: Answer[][];

  constructor() { }

  public loadEmptyBoard() : Answer[] {
    //console.log("Entered GameServiceService.loadEmptyBoard()");
    if (!this.answers) {
      this.createAllQuestions();
    }
    return this.createAnswers([], []);
  }

  public loadQuestion(questionNumber: number) : Answer[] {
    //console.log("Entered GameServiceService.loadQuestion()");
    if (!this.answers) {
      this.createAllQuestions();
    }
    return this.answers[questionNumber - 1];
  }

  public createAllQuestions() {
    this.createAllQuestionsForKids();
    //this.createAllQuestionsForAdults();
  }

  public createAllQuestionsForKids() {
    //console.log("Entered GameServiceService.createAllQuestions()");
    this.answers = [];
    this.answers.push(this.createAnswers(["He’s Plump", "Is Jolly", "Has A Beard", "Wears A Red Suit", "He’s Real", "Brings Presents", "Lives At North Pole"], [33, 14, 14, 12, 11, 9, 3]));
    this.answers.push(this.createAnswers(["Sleep", "Scary Movie", "Shots", "Making A Wish", "Prayer", "Roller Coaster", "Hide And Seek"], [51, 17, 12, 7, 5, 3, 3]));
    this.answers.push(this.createAnswers(["Wears Glasses", "Dress Funny", "Bad At Sports", "Smart", "Study Too Much", "Pocket Protector", "Plays Chess"], [28, 20, 13, 13, 11, 6, 4]));
    this.answers.push(this.createAnswers(["They’re Dirty", "Picture Day", "It’s Halloween", "Wears A Uniform"], [38, 29, 24, 9]));
    this.answers.push(this.createAnswers(["Lightning Scar", "Glasses", "Magical Powers", "Carries A Wand", "Wears A Cape"], [31, 21, 19, 15, 11]));
    this.answers.push(this.createAnswers(["Fishing boat", "Naval ship", "Butcher Shop", "Jewelry Store"], [50, 16, 15, 11]));
    this.answers.push(this.createAnswers(["Plane", "Sun", "Moon", "Satellite", "Ship"], [45, 30, 16, 3, 3]));
    this.answers.push(this.createAnswers(["Pretty", "Wear Dresses", "Wear Crowns", "Marry Princes", "Live In Fairy Tales", "Get All They Want", "Live in Castles"], [37, 23, 10, 8, 5, 3, 3]));
    this.answers.push(this.createAnswers(["Wash hands", "Pray", "Homework", "Set table"], [44, 35, 10, 10]));
    this.answers.push(this.createAnswers(["Arachnophobia", "Agoraphobia", "Claustrophobia", "Germophobia"], [37, 23, 22, 12]));
    this.answers.push(this.createAnswers(["Ski", "Sled", "Ice Skate", "Snowboard", "Sit By Fire"], [52, 21, 9, 8, 5]));
    this.answers.push(this.createAnswers(["Pizza", "Hamburger", "Steak", "Ice Cream", "Hot Dog"], [52, 23, 11, 9, 4]));
    this.answers.push(this.createAnswers(["Vampire", "Snake", "Wolf", "Bat", "Dog", "Tiger", "Werewolf"], [56, 13, 10, 8, 6, 3, 3]));
    this.answers.push(this.createAnswers(["Bark / Growl", "Bite", "Beg", "Potty Inside", "Chew", "Jump Up", "Run Away"], [41, 21, 10, 10, 7, 5, 4]));
    this.answers.push(this.createAnswers(["Music Instrument", "Riding A Bike", "Alphabet", "Walking", "Writing"], [29, 21, 19, 17, 11]));
    this.answers.push(this.createAnswers(["Teeth", "Toys", "Money", "Homework", "Gloves", "Jacket", "Temper"], [35, 34, 13, 7, 4, 3, 3]));
    this.answers.push(this.createAnswers(["Pet it", "Kiss it", "Feed it", "Take it home"], [54, 16, 15, 4]));
    this.answers.push(this.createAnswers(["Dog", "Lion", "Bear", "Tiger", "Gorilla"], [41, 21, 18, 12, 5]));
    this.answers.push(this.createAnswers(["Pizza", "Movie", "Jokes", "Smile", "Macaroni", "Pick Up Lines", "Music"], [30, 22, 15, 12, 9, 6, 3]));
    this.answers.push(this.createAnswers(["School", "Dentist / Dr Office", "Shopping", "Place Of Worship", "Bed"], [40, 29, 8, 6, 5]));
  }

  public createAllQuestionsForAdults() {
    this.answers = [];
    this.answers.push(this.createAnswers(["Shopping", "Decorations", "Holiday Party", "Menu", "Travel Plans"], [52, 20, 12, 11, 3]));
    this.answers.push(this.createAnswers(["Flying Reindeer", "Generosity", "Work Once A Year", "World Travel", "Paid In Cookies", "Fancy Sleigh", "Efficiency"], [36, 21, 12, 11, 8, 6, 4]));
    this.answers.push(this.createAnswers(["Open Presents", "Family Dinner", "Drink", "Go To Church", "Sing Carols"], [41, 22, 19, 10, 4]));
    this.answers.push(this.createAnswers(["Run", "Climb Ropes", "Jump Rope", "Push Ups", "Jumping Jacks", "Pull Ups", "Sit Ups"], [31, 26, 9, 9, 8, 8, 7]));
    this.answers.push(this.createAnswers(["Survivor", "Biggest Loser", "American Idol"], [58, 27, 6]));
    this.answers.push(this.createAnswers(["Car", "Bell Bottoms", "Sun Glasses", "Long Hair"], [51, 17, 12, 10]));
    this.answers.push(this.createAnswers(["Kind", "Funny", "Friendly", "Smart", "Honest", "Happy", "Fun"], [38, 25, 10, 9, 7, 4, 3]));
    this.answers.push(this.createAnswers(["Wrap It", "Remove Price Tag", "Buy It"], [61, 27, 4]));
    this.answers.push(this.createAnswers(["Birthday Party", "Bachelor(ette)", "Pool", "Holiday Party", "Bridal Party", "Political Party", "Slumber Party"], [61, 17, 5, 4, 4, 3, 3]));
    this.answers.push(this.createAnswers(["Eating", "Blinking", "Talking", "Laughing", "Looking Away"], [32, 27, 23, 10, 5]));
    this.answers.push(this.createAnswers(["Shower", "Make Coffee", "Eat Breakfast", "Watch TV", "Read", "Pray", "Use The Bathroom"], [56, 14, 11, 6, 5, 4, 3]));
    this.answers.push(this.createAnswers(["Play Football", "Dance", "Swim", "Sleep", "Read", "Watch TV/Movie", "Jog"], [17, 16, 15, 13, 11, 10, 9]));
    this.answers.push(this.createAnswers(["Work", "School", "Church", "Doctors Office", "Airport"], [58, 25, 7, 4, 4]));
    this.answers.push(this.createAnswers(["Monster", "Snake", "Rotting Food", "Spider", "Rodent", "Dust", "Person"], [43, 16, 12, 10, 8, 4, 3]));
    this.answers.push(this.createAnswers(["American Football", "Hockey", "Boxing", "Rugby"], [49, 39, 5, 5]));
    this.answers.push(this.createAnswers(["Miami", "San Francisco", "New York City", "LA", "San Diego", "Boston", "Atlantic City"], [25, 21, 14, 11, 11, 7, 7]));
    this.answers.push(this.createAnswers(["Hair", "Nails", "Ears", "Nose"], [71, 13, 7, 6]));
    this.answers.push(this.createAnswers(["Liberty Bell", "Door Bell", "Church Bell", "Wedding Bells", "School Bell", "Jingle Bells", "Cow Bell"], [27, 22, 12, 9, 9, 9, 7]));
    this.answers.push(this.createAnswers(["Actor", "Model", "Dancer", "Firefighter", "President"], [39, 23, 16, 4, 4]));
    this.answers.push(this.createAnswers(["Drive", "Ski", "Walk Through It", "Sled", "Shovel", "Make A Snowman", "Dress"], [42, 26, 14, 5, 5, 3, 3]));
    this.answers.push(this.createAnswers(["Talk", "Smack", "Spit", "Mouth Open"], [48, 22, 15, 14]));
    this.answers.push(this.createAnswers(["Chocolate", "Strawberries", "Oysters", "Spaghetti", "Steak"], [42, 30, 12, 8, 5]));
    this.answers.push(this.createAnswers(["Slow Down", "Stop", "Watch Out", "Turn Here", "Hurry Up"], [35, 29, 20, 9, 5]));
    this.answers.push(this.createAnswers(["Hospital", "Movie Theater", "Place Of Worship", "Airplane", "School / Work", "Library", "Court"], [32, 20, 18, 12, 9, 4, 4]));
    this.answers.push(this.createAnswers(["Paying Bills", "Babysitting", "Solving Problems", "Moving"], [54, 28, 10, 6]));
    this.answers.push(this.createAnswers(["Flowers", "Perfume", "Candle", "Campfire", "Marker", "Bleach", "Gasoline"], [38, 16, 15, 9, 7, 6, 4]));
    this.answers.push(this.createAnswers(["Wedding Bells", "Biological Clock", "Ex", "Details Of Love Life", "Money"], [34, 24, 16, 12, 8]));
    this.answers.push(this.createAnswers(["Keys", "Pen / Pencil", "Money", "Remote Control", "Phone", "Glasses", "Scissors"], [35, 23, 14, 11, 5, 5, 3]));
  }


  public createAnswers(answerTexts: string[], values: number[]) : Answer[] {
    //console.log("Entered GameServiceService.createAnswers()");
    // TODO: Get this from the server
    let answers: Answer[] = [];
    for (let i = 0; i < 8; i++) {
      answers.push(this.createAnswer(i + 1, answerTexts[i], values[i]));
    }
    return answers;
  }

  private createAnswer(num: number, text: string, value: number): Answer {
    let answer = new Answer(); 
    if (text) {
      answer.Status = 1;
    // TODO: For test only - remove next line
    //answer.Status = 2;
  } else {
      answer.Status = 0;
    }
    answer.Number = num;
    answer.Text = text;
    answer.Value = value;
    return answer;
  }

}
