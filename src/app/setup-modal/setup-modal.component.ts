import { Component, ElementRef, EventEmitter, Input, OnInit, Renderer2, ViewChild, HostListener, Output } from '@angular/core';
import { GameService } from '../game.service';

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
  @Input() showAnimations: boolean = true;
  @Input() gameService: GameService;

  @Output() onChangeShowAnimation = new EventEmitter<boolean>();

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

  private loadFile(evt) {
    if (evt.target.files && evt.target.files[0]) {
      if (this.isValidFileType(evt.target.files[0].name)) {
        var reader = new FileReader();
        reader.onload = () => {
          var text = reader.result;
          this.gameService.loadAllQuestions(text);
        }
        reader.readAsText(evt.target.files[0]);
      }
    }
  }

  private changedAnimationToggle(evt) {
    this.onChangeShowAnimation.emit(this.showAnimations);
  }

  private isValidFileType(fileName: string): boolean {
    if (fileName && fileName.length > 4) {
      return fileName.toLowerCase().endsWith('.txt') ||
            fileName.toLowerCase().endsWith('.json');
    }
    return false;
  }

  private uploadImage(evt: any) {
    // TODO: Implement this
  }

  private clickedOnImage(evt: any) {
    // TODO: Implement or remove this
  }

}