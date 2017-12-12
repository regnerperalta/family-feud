import { Component, ElementRef, Input, OnInit, Output, EventEmitter, Renderer2, ViewChild, HostListener, SimpleChange } from '@angular/core';

@Component({
  selector: 'video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})

export class VideoModalComponent implements OnInit {

  private DURATION: number = 30000;
  @Input() url: string;
  @Input() show: boolean;
  @Output() onHide = new EventEmitter<any>();
  
  // References to Modals
  @ViewChild('video_modal') videoModalTag: ElementRef;
  private modalOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes && changes["show"] && changes["show"].currentValue) {
      this.openVideoModal();
      this.delay(this.DURATION).then(a => this.closeVideoModal());
    }
  }

  private closeVideoModal() {
    let videoModal = this.videoModalTag.nativeElement;
    this.renderer.setStyle(videoModal, 'display', 'none');
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

  private openVideoModal() {
    console.log("Entered openVideoModal()");
    console.log("url: " + this.url);
    let videoModal = this.videoModalTag.nativeElement;
    this.renderer.setStyle(videoModal, 'display', 'block');
    this.modalOpen = true;
    this.show = false;
    this.onHide.emit();
  }

}