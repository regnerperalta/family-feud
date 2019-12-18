import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'instructions-modal',
  templateUrl: './instructions-modal.component.html',
  styleUrls: ['./instructions-modal.component.css']
})

export class InstructionsModalComponent implements OnInit {

  // References to Modals
  @ViewChild('instructions_modal') instructionsModalTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  private closeModal() {
    let modal = this.instructionsModalTag.nativeElement;
    this.renderer.setStyle(modal, 'display', 'none');
    this.modalOpen = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event) {
      if (event.key.toUpperCase() == '?') {
        if (this.modalOpen) {
          this.closeModal();
        } else {
          this.openModal();
        }
      }
    } 
  }

  private openModal() {
    let modal = this.instructionsModalTag.nativeElement;
    this.renderer.setStyle(modal, 'display', 'block');
    this.modalOpen = true;
  }
}