import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainGameComponent } from './main-game/main-game.component';
import { FastMoneyComponent } from './fast-money/fast-money.component';

const routes: Routes = [
    { path: '', redirectTo: 'main-game', pathMatch: 'full' },
    { path: 'main-game', component: MainGameComponent },
    { path: 'fast-money', component: FastMoneyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }