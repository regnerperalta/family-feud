import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';

import { LightBulb } from '../model/lightBulb';
import { LightbulbService } from '../lightbulb.service';

@Component({
  selector: 'bracket-modal',
  templateUrl: './bracket-modal.component.html',
  styleUrls: ['./bracket-modal.component.css']
})

export class BracketModalComponent implements OnInit {

  @Input() teamNames: string[];
  @Input() teamScores: number[];
  private lightbulbs: LightBulb[];
  
  // References to Modal
  @ViewChild('bracket_modal') bracketModalTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2,
    private lightbulbService: LightbulbService) {}

  ngOnInit() {
    this.lightbulbs = this.lightbulbService.initializeLightbulbsForBracket();
  }

  private closeBracketModal() {
    let bracketModal = this.bracketModalTag.nativeElement;
    this.renderer.setStyle(bracketModal, 'display', 'none');
    this.modalOpen = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("Entred BracketModalComponent.keyEvent(" + event.key.toUpperCase() + ")");
    if (event) {
      if (event.key.toUpperCase() == '[') this.openBracketModal();
      if (event.key.toUpperCase() == ']') this.closeBracketModal();
    } 
  }

  private openBracketModal() {
    let bracketModal = this.bracketModalTag.nativeElement;
    this.renderer.setStyle(bracketModal, 'display', 'block');
    this.modalOpen = true;
  }

  private performLightShow() {
    this.lightbulbService.changeRandomly(this.lightbulbs);
  }

  private showLightbulbDetails(lightbulb: LightBulb) {
    alert(JSON.stringify(lightbulb));
  }

}