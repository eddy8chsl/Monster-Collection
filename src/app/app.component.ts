import { Component, computed, effect, signal, model, inject } from '@angular/core';
import { MonsterComponent } from './components/monster/monster.component'
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { SearchTypeComponent } from './components/search-type/search-type.component';
import { MonsterService } from './services/monster/monster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MonsterComponent, SearchBarComponent, CommonModule, SearchTypeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monsterService = inject(MonsterService);

  monsters = signal<Monster[]>([]);
  search = model('');

  get filteredMonster() {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  }

  isElectricClicked: string = '';
  isFireClicked: string = '';
  isWaterClicked: string = '';
  isPlantClicked: string = '';

  electricClicked($event:any): void {
    this.isElectricClicked = $event;
  }

  get filterElectric() {
    this.isElectricClicked = '';
    return this.monsters().filter(monster => monster.type === MonsterType.ELECTRIC);
  }

  waterClicked($event:any): void {
    this.isWaterClicked = $event;
  }

  get filterWater() {
    this.isWaterClicked = '';
    return this.monsters().filter(monster => monster.type === MonsterType.WATER);
  }

  plantClicked($event:any): void {
    this.isPlantClicked = $event;
  }

  get filterPlant() {
    this.isPlantClicked = '';
    return this.monsters().filter(monster => monster.type === MonsterType.PLANT);
  }

  fireClicked($event:any): void {
    this.isFireClicked = $event;
  }

  get filterFire() {
    this.isFireClicked = '';
    return this.monsters().filter(monster => monster.type === MonsterType.FIRE)
  }

  constructor() {
    this.monsters.set(this.monsterService.getAll())

  }

  addGenericMonster() {
		const monster = new Monster();
		this.monsterService.add(monster);
		this.monsters.set(this.monsterService.getAll());
	}

}
