import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnimationModalComponent } from './animation-modal/animation-modal.component';
import { AnimationService } from './animation.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BracketModalComponent } from './bracket-modal/bracket-modal.component';
import { FastMoneyComponent } from './fast-money/fast-money.component';
import { GameService } from './game.service';
import { InstructionsModalComponent } from './instructions-modal/instructions-modal.component';
import { LightbulbService } from './lightbulb.service';
import { MainGameComponent } from './main-game/main-game.component';
import { SetupModalComponent } from './setup-modal/setup-modal.component';
import { VideoModalComponent } from './video-modal/video-modal.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AnimationModalComponent,
    AppComponent,
    BracketModalComponent,
    FastMoneyComponent,
    InstructionsModalComponent,
    MainGameComponent,
    SetupModalComponent,
    VideoModalComponent
  ],
  providers: [AnimationService, GameService, LightbulbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
