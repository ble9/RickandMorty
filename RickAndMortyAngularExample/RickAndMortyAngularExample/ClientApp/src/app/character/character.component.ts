import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../icharacter';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: ICharacter;
  selected: boolean;
  @Output() selectedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  selectedChanged() {
    this.selectedEvent.emit(this.selected);
  }

}
