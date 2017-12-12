import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'setup-modal',
  templateUrl: './setup-modal.component.html',
  styleUrls: ['./setup-modal.component.css']
})

export class SetupModalComponent implements OnInit {

  // Control tournament
  @Input() teamNames: string[];
  @Input() teamScores: number[];
  @Input() teamImages: string[];
  @Input() adults: boolean = true;

  // References to Modals
  @ViewChild('setup_modal') setupModalTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  private closeSetupModal() {
    let setupModal = this.setupModalTag.nativeElement;
    this.renderer.setStyle(setupModal, 'display', 'none');
    this.modalOpen = false;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("Entred AppComponent.keyEvent()");
    if (event) {
      if (event.key.toUpperCase() == 'S') {
        if (this.modalOpen) {
          this.closeSetupModal();
        } else {
          this.openSetupModal();
        }
      }
    } 
  }

  private openSetupModal() {
    let setupModal = this.setupModalTag.nativeElement;
    this.renderer.setStyle(setupModal, 'display', 'block');
    this.modalOpen = true;
  }

}