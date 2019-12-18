import { Injectable } from '@angular/core';

import { LightBulb } from './model/lightBulb';

@Injectable()
export class LightbulbService {

  public TOGGLE_SPEED: number = 50;
  public BLINK_SPEED: number = 300;
  public NUMBER_OF_BLINKS: number = 10;
  public NUMBER_OF_COLUMNS: number = 29;
  public NUMBER_OF_ROWS: number = 20;
  public DISTANCE_BETWEEN_LIGHTS: number = 20

  constructor() { }
  
  public blink(lightbulbs: LightBulb[], blinks: number, speed: number) {
    if (blinks == 0) {
      return;
    }
    this.toggleAllLights(lightbulbs);
    this.delay(speed).then(a => this.blink(lightbulbs, --blinks, speed));
  }

  public changeAllRandomly(lightbulbs: LightBulb[]) {
    let color = Math.floor(Math.random() * 6);
    this.changeColorForAllLights(lightbulbs, color);
    this.delay(500).then(a => this.changeRandomly(lightbulbs));
  }

  public changeRandomly(lightbulbs: LightBulb[]) {
    let color = Math.floor(Math.random() * 6);
    for (let i = 0; i < lightbulbs.length / 4; i++) {
      let id = Math.floor(Math.random() * lightbulbs.length);
      this.changeColor(lightbulbs, id, color);
    }
    this.delay(500).then(a => this.changeRandomly(lightbulbs));
  }

  public changeColor(lightbulbs: LightBulb[], i: number, color: number) {
    //console.log("Entered LightbulbService.changeColor(" + i + ", " + color + ")");
    if (lightbulbs && lightbulbs[i]) {
        switch (color) {
          case 0: lightbulbs[i].Class = "lightbulb light_white"; break;
          case 1: lightbulbs[i].Class = "lightbulb light_red"; break;
          case 2: lightbulbs[i].Class = "lightbulb light_green"; break;
          case 3: lightbulbs[i].Class = "lightbulb light_blue"; break;
          case 4: lightbulbs[i].Class = "lightbulb light_orange"; break;
          case 5: lightbulbs[i].Class = "lightbulb light_purple"; break;
          case 6: lightbulbs[i].Class = "lightbulb light_yellow"; break;
          default: lightbulbs[i].Class = "lightbulb light_off"; break;
        }
    }
  }

  public changeColorForAllLights(lightbulbs: LightBulb[], color: number) {
    //console.log("Entered LightbulbService.changeColorForAllLights(" + color + ")");
    switch (color) {
      case 0: this.turnAllLightsOff(lightbulbs); break;
      case 1: this.turnAllLightsOn(lightbulbs); break;
      case 2: this.turnAllLightsRed(lightbulbs); break;
      case 3: this.turnAllLightsGreen(lightbulbs); break;
      case 4: this.turnAllLightsBlue(lightbulbs); break;
      case 5: this.turnAllLightsYellow(lightbulbs); break;
      case 6: this.turnAllLightsPurple(lightbulbs); break;
      case 7: this.turnAllLightsOrange(lightbulbs); break;
      default: this.turnAllLightsOff(lightbulbs); break;
    }
  }

  public createLightbulb(id: number, status: boolean, x: number, y: number): LightBulb {
    let lightbulb = new LightBulb();
    lightbulb.Id = id;
    lightbulb.Display = true;
    lightbulb.Status = status;
    lightbulb.X = x;
    lightbulb.Y = y;
    lightbulb.Class = "lightbulb light_on";
    return lightbulb;
  }

  public delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public initializeLightbulbs(): LightBulb[] {
    let numberOfColumns: number = this.NUMBER_OF_COLUMNS;
    let numberOfRows: number = this.NUMBER_OF_ROWS;
    let distanceBetweenLights: number = this.DISTANCE_BETWEEN_LIGHTS;
    let lightbulbs = [];
    for (let i = 0; i < (numberOfColumns * numberOfRows); i++) {
      let lightbulb = 
        this.createLightbulb(
          i + 1, 
          true, 
          (i % numberOfColumns) * distanceBetweenLights, 
          (Math.floor(i/numberOfColumns)) * distanceBetweenLights);
      if (i < 10) lightbulb.Display = false;
      if (i > 18 && i < 36) lightbulb.Display = false;
      if (i > 50 && i < 63) lightbulb.Display = false;
      if (i > 81 && i < 90) lightbulb.Display = false;
      if (i > 112 && i < 118) lightbulb.Display = false;
      if (i > 142 && i < 146) lightbulb.Display = false;
      if (i > 172 && i < 175) lightbulb.Display = false;
      if (i > 201 && i < 203) lightbulb.Display = false;
      if (i > 232 && i < 233) lightbulb.Display = false;
      if (i > 261 && i < 262) lightbulb.Display = false;
      if (i > 290 && i < 291) lightbulb.Display = false;
      if (i > 319 && i < 320) lightbulb.Display = false;
      if (i > 347 && i < 349) lightbulb.Display = false;
      if (i > 375 && i < 378) lightbulb.Display = false;
      if (i > 404 && i < 408) lightbulb.Display = false;
      if (i > 432 && i < 438) lightbulb.Display = false;
      if (i > 460 && i < 469) lightbulb.Display = false;
      if (i > 487 && i < 500) lightbulb.Display = false;
      if (i > 514 && i < 532) lightbulb.Display = false;
      if (i > 540) lightbulb.Display = false;
      /*
      if (i > 138 && i < 160) lightbulb.Display = false;
      if (i > 190 && i < 208) lightbulb.Display = false;
      if (i > 242 && i < 256) lightbulb.Display = false;
      if (i > 294 && i < 305) lightbulb.Display = false;
      if (i > 345 && i < 354) lightbulb.Display = false;
      if (i > 396 && i < 403) lightbulb.Display = false;
      if (i > 447 && i < 453) lightbulb.Display = false;
      if (i > 497 && i < 502) lightbulb.Display = false;
      if (i > 548 && i < 552) lightbulb.Display = false;
      if (i > 598 && i < 601) lightbulb.Display = false;
      if (i > 649 && i < 650) lightbulb.Display = false;
      if (i > 699 && i < 700) lightbulb.Display = false;
      if (i > 749 && i < 750) lightbulb.Display = false;
      if (i > 799 && i < 801) lightbulb.Display = false;
      if (i > 849 && i < 852) lightbulb.Display = false;
      if (i > 898 && i < 902) lightbulb.Display = false;
      if (i > 948 && i < 953) lightbulb.Display = false;
      if (i > 997 && i < 1003) lightbulb.Display = false;
      if (i > 1047 && i < 1054) lightbulb.Display = false;
      if (i > 1096 && i < 1105) lightbulb.Display = false;
      if (i > 1145 && i < 1156) lightbulb.Display = false;
      if (i > 1194 && i < 1208) lightbulb.Display = false;
      if (i > 1242 && i < 1260) lightbulb.Display = false;
      if (i > 1290 && i < 1312) lightbulb.Display = false;
      if (i > 1338 && i < 1365) lightbulb.Display = false;
      if (i > 1385 && i < 1419) lightbulb.Display = false;
      if (i > 1431) lightbulb.Display = false;
      */
      lightbulbs.push(lightbulb);
    }
    return lightbulbs;
  }

  public initializeLightbulbsForBracket(): LightBulb[] {
    let lightbulbs = [];
    for (let i = 0; i < (25 * 14); i++) {
      let lightbulb = this.createLightbulb(i + 1, true, (i * 20) % 500, (Math.floor(i * 20 /500) + 1) * 20);
      if (i < 8) lightbulb.Display = false;
      if (i > 16 && i < 30) lightbulb.Display = false;
      if (i > 44 && i < 53) lightbulb.Display = false;
      if (i > 71 && i < 77) lightbulb.Display = false;
      if (i > 97 && i < 101) lightbulb.Display = false;
      if (i > 123 && i < 126) lightbulb.Display = false;
      if (i > 148 && i < 150) lightbulb.Display = false;
      if (i > 199 && i < 201) lightbulb.Display = false;
      if (i > 223 && i < 226) lightbulb.Display = false;
      if (i > 248 && i < 252) lightbulb.Display = false;
      if (i > 272 && i < 278) lightbulb.Display = false;
      if (i > 296 && i < 305) lightbulb.Display = false;
      if (i > 319 && i < 333) lightbulb.Display = false;
      if (i > 342) lightbulb.Display = false;
      lightbulbs.push(lightbulb);
    }
    return lightbulbs;
  }

  public showLightbulbDetails(lightbulb: LightBulb) {
    alert(JSON.stringify(lightbulb));
  }

  public toggleAllLights(lightbulbs: LightBulb[]) {
    for (let i = 0; i < lightbulbs.length; i++) {
      this.toggleLightbulb(lightbulbs, i);
    }
  }

  public toggleLeftToRight(lightbulbs: LightBulb[], column: number, speed: number) {
    //console.log("Entered moveLeftToRight(" + column + ")");
    if (column >= this.NUMBER_OF_COLUMNS) {
      return;
    }
    this.toggleColumn(lightbulbs, column);
    this.delay(speed).then(a => this.toggleLeftToRight(lightbulbs, ++column, speed));
  }

  public toggleLightbulb(lightbulbs: LightBulb[], i: number) {
    //console.log("Entered toggleLightbulb(" + i + ")");
    if (lightbulbs && lightbulbs[i]) {
      if (lightbulbs[i].Class == "lightbulb light_off") {
        lightbulbs[i].Class = "lightbulb light_on";
      } else {
        lightbulbs[i].Class = "lightbulb light_off";
      }
    }
  }

  public toggleRow(lightbulbs: LightBulb[], row: number) {
    console.log("Entred toggleRow(" + row + ")");
    for (let i = (row * this.NUMBER_OF_COLUMNS); i < ((row + 1) * this.NUMBER_OF_COLUMNS); i++) {
      this.toggleLightbulb(lightbulbs, i);
    }
  }

  public toggleColumn(lightbulbs: LightBulb[], column: number) {
    //console.log("Entred toggleAllLights()");
    for (let i = column; i < (this.NUMBER_OF_COLUMNS * this.NUMBER_OF_ROWS); i+=this.NUMBER_OF_COLUMNS) {
      this.toggleLightbulb(lightbulbs, i);
    }
  }

  public toggleRightToLeft(lightbulbs: LightBulb[], column: number, speed: number) {
    //console.log("Entered moveLeftToRight(" + column + ")");
    if (column < 0) {
      return;
    }
    this.toggleColumn(lightbulbs, column);
    this.delay(speed).then(a => this.toggleRightToLeft(lightbulbs, --column, speed));
  }

  public toggleTopToBottom(lightbulbs: LightBulb[], row: number, speed: number) {
    //console.log("Entered toggleTopToBottom(" + row + ")");
    if (row > this.NUMBER_OF_COLUMNS) {
      return;
    }
    this.toggleRow(lightbulbs, row);
    this.delay(speed).then(a => this.toggleTopToBottom(lightbulbs, ++row, speed));
  }

  public toggleBottomToTop(lightbulbs: LightBulb[], row: number, speed: number) {
    //console.log("Entered toggleBottomToTop(" + row + ")");
    if (row < 0) {
      return;
    }
    this.toggleRow(lightbulbs, row);
    this.delay(speed).then(a => this.toggleBottomToTop(lightbulbs, --row, speed));
  }

  public turnAllLightsOff(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsOff()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_off";
    }
  }

  public turnAllLightsOn(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsOn()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_on";
    }
  }

  public turnAllLightsRed(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsRed()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_red";
    }
  }

  public turnAllLightsGreen(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsGreen()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_green";
    }
  }

  public turnAllLightsYellow(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsYellow()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_yellow";
    }
  }

  public turnAllLightsBlue(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsBlue()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_blue";
    }
  }

  public turnAllLightsPurple(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsPurple()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_purple";
    }
  }

  public turnAllLightsOrange(lightbulbs: LightBulb[]) {
    //console.log("Entered LightbulbService.turnAllLightsOrange()");
    for (let i = 1; i < lightbulbs.length; i++) {
      lightbulbs[i].Class = "lightbulb light_orange";
    }
  }

}