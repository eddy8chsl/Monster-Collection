import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = [];
  currentIndex: number = 1;

  constructor() {
    this.load();
  }

	private save() {
		localStorage.setItem('monsters', JSON.stringify(this.monsters));
	}

	private load() {
		const monstersData = localStorage.getItem('monsters');
		if (monstersData) {
			this.monsters = JSON.parse(monstersData).map((monsterJson: any) => Object.assign(new Monster(), monsterJson));
			this.currentIndex = Math.max(...this.monsters.map(monster => monster.id)) + 1;
		} else {
			this.init();
			this.save();
		}
	}

  private init() {
    const monster1 = new Monster();
    monster1.id = 1;
    monster1.name = "My Monster";
    monster1.image = "../../assets/img/monster.png";
    monster1.type = MonsterType.ELECTRIC;
    monster1.hp = 40;
    monster1.figureCaption = "N°001 Monster";
    monster1.attackName = "Geo Impact";
    monster1.attackStrenght = 60;
    monster1.attackDescription = "This is a long description of a monster attack. Probably something to do with electricity..."
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = 2;
    monster2.image = "../assets/img/m_feu.png";
    monster2.type = MonsterType.FIRE;
    monster2.name = "Fou";
    monster2.hp = 80;
    monster2.figureCaption = "N°002 Monster";
    monster2.attackStrenght = 15;
    monster2.attackName = "attack FOU";
    monster2.attackDescription = "blablabla";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = 3;
    monster3.image = "../assets/img/m_eau.png";
    monster3.type = MonsterType.WATER;
    monster3.name = "PIK";
    monster3.hp = 60;
    monster3.figureCaption = "N°003 Monster";
    monster3.attackStrenght = 30;
    monster3.attackName = "attack PIK";
    monster3.attackDescription = "blablabla";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = 4;
    monster4.image = "../assets/img/m_plant.png";
    monster4.type = MonsterType.PLANT;
    monster4.name = "Pirana";
    monster4.hp = 100;
    monster4.figureCaption = "N°004 Monster";
    monster4.attackStrenght = 35;
    monster4.attackName = "attack plante";
    monster4.attackDescription = "blablabla";
    this.monsters.push(monster4);

    const monster5 = new Monster();
    monster5.id = 5;
    monster5.name = "foudre";
    monster5.image = "../../assets/img/m_elec.png";
    monster5.type = MonsterType.ELECTRIC;
    monster5.hp = 75;
    monster5.figureCaption = "N°005 Monster";
    monster5.attackName = "Attack éclair";
    monster5.attackStrenght = 50;
    monster5.attackDescription = "This is a long description of a monster attack. Probably something to do with electricity..."
    this.monsters.push(monster5);

    const monster6 = new Monster();
    monster6.id = 6;
    monster6.image = "../assets/img/m_eau2.png";
    monster6.type = MonsterType.WATER;
    monster6.name = "Geant";
    monster6.hp = 150;
    monster6.figureCaption = "N°006 Monster";
    monster6.attackStrenght = 80;
    monster6.attackName = "attack geant";
    monster6.attackDescription = "blablabla";
    this.monsters.push(monster6);

    const monster7 = new Monster();
    monster7.id = 7;
    monster7.image = "../assets/img/m_eau3.png";
    monster7.type = MonsterType.WATER;
    monster7.name = "Mimi";
    monster7.hp = 60;
    monster7.figureCaption = "N°007 Monster";
    monster7.attackStrenght = 10;
    monster7.attackName = "attack mimi";
    monster7.attackDescription = "blablabla";
    this.monsters.push(monster7);
   }

  getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy())
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster : Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy())
    this.currentIndex++;

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === monster.id);

    if (monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
    }
    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id);
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
    }
  }
}
