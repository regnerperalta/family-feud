import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnimationModalComponent } from './animation-modal/animation-modal.component';
import { AppComponent } from './app.component';
import { BracketModalComponent } from './bracket-modal/bracket-modal.component';
import { FastMoneyComponent } from './fast-money/fast-money.component';
import { GameServiceService } from './game.service';
import { LightbulbService } from './lightbulb.service';
import { MainGameComponent } from './main-game/main-game.component';
import { SetupModalComponent } from './setup-modal/setup-modal.component';
import { VideoModalComponent } from './video-modal/video-modal.component';

@NgModule({
  declarations: [
    AnimationModalComponent,
    AppComponent,
    BracketModalComponent,
    FastMoneyComponent,
    MainGameComponent,
    SetupModalComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameServiceService, LightbulbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
