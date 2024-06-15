import { Component, EventEmitter, model, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonsterType } from '../../utils/monster.utils';

@Component({
  selector: 'app-search-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-type.component.html',
  styleUrl: './search-type.component.css'
})
export class SearchTypeComponent {
  @Output() typeElectric = new EventEmitter<string>();
  @Output() typeFire = new EventEmitter<string>();
  @Output() typePlant = new EventEmitter<string>();
  @Output() typeWater = new EventEmitter<string>();

  typeElectricClicked() {
    this.typeElectric.emit('authorized');
  }
  typeFireClicked() {
    this.typeFire.emit('authorized');
  }
  typePlantClicked() {
    this.typePlant.emit('authorized');
  }
  typeWaterClicked() {
    this.typeWater.emit('authorized');
  }
}
