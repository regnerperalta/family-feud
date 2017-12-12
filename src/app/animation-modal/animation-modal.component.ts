import { Component, ElementRef, Input, OnInit, Output, EventEmitter, Renderer2, ViewChild, HostListener, SimpleChange } from '@angular/core';

@Component({
  selector: 'animation-modal',
  templateUrl: './animation-modal.component.html',
  styleUrls: ['./animation-modal.component.css']
})

export class AnimationModalComponent implements OnInit {

  private DURATION: number = 5000;
  @Input() image: string;
  @Input() show: boolean;
  @Output() onHide = new EventEmitter<any>();
  
  // References to Modals
  @ViewChild('animation_modal') animationModalTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes && changes["show"] && changes["show"].currentValue) {
      this.openAnimationModal();
      this.delay(this.DURATION).then(a => this.closeAnimationModal());
    }
  }

  private closeAnimationModal() {
    let animationModal = this.animationModalTag.nativeElement;
    this.renderer.setStyle(animationModal, 'display', 'none');
    this.modalOpen = false;
  }

  public delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /*
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("Entred AppComponent.keyEvent()");
    if (event) {
      // TODO: remove this - for test only
      if (event.key.toUpperCase() == 'T') {
        if (this.modalOpen) {
          this.closeAnimationModal();
        } else {
          this.openAnimationModal();
          this.delay(this.DURATION).then(a => this.closeAnimationModal());
        }
      }
    } 
  }
  */

  private openAnimationModal() {
    console.log("Entered openAnimationModal()");
    console.log("image: " + this.image);
    let animationModal = this.animationModalTag.nativeElement;
    this.renderer.setStyle(animationModal, 'display', 'block');
    this.modalOpen = true;
    this.show = false;
    this.onHide.emit();
  }

}