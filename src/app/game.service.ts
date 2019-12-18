import { Injectable } from '@angular/core';

import { Answer } from './model/answer';
import { Question } from './model/question';

@Injectable()
export class GameService {

  // TODO - delete this
  private answers: Answer[][];
  private questions: Question[];

  constructor() { }

  public loadEmptyBoard() : Answer[] {
    // TODO - delete this
    return this.createAnswers("", [], []);
  }

  public areQuestionsLoaded() {
    // TODO - update this
    return (this.answers && this.answers.length > 0);
  }

  public loadAllQuestions(content) {
    if (content) {
      var lines = content.split("\n");
      this.answers = [];
      this.questions = [];
      lines.forEach(line => {
        var segments = line.split(";");
        if (segments && segments.length > 2) {
          var question = segments[0].trim();
          var answers = segments[1].trim().split(",");
          for (var i = 0; i < answers.length; i++) {
            answers[i] = answers[i].trim().replace("[", "").replace("]", "");
          }
          var values = segments[2].trim().split(",");
          for (var i = 0; i < values.length; i++) {
            values[i] = Number(values[i].trim().replace("[", "").replace("]", ""));
          }
          // TODO - delete this
          this.answers.push(this.createAnswers(question, answers, values));
          this.questions.push(this.createQuestion(question, answers, values));
          }
      });
    }
  }

  public getQuestion(questionNumber: number) : Question {
    return this.questions[questionNumber - 1];
  }

  // TODO - delete this
  public loadQuestion(questionNumber: number, adults: boolean) : Answer[] {
    return this.answers[questionNumber - 1];
  }

  private createQuestion(questionText: string, answerTexts: string[], values: number[]) : Question {
    let answers: Answer[] = [];
    for (let i = 0; i < 8; i++) {
      answers.push(this.createAnswer(i + 1, answerTexts[i], values[i]));
    }
    let question = new Question();
    question.QuestionText = questionText;
    question.Answers = answers;
    return question;
  }

  // TODO - delete this
  private createAnswers(question: string, answerTexts: string[], values: number[]) : Answer[] {
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
    } else {
      answer.Status = 0;
    }
    answer.Number = num;
    answer.Text = text;
    answer.Value = value;
    return answer;
  }
}