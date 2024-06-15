import { Component, Input, InputSignal, OnChanges, OnInit, computed, input } from '@angular/core';
import { Monster } from '../../models/monster.model'
import { MonsterTypeProperties } from '../../utils/monster.utils';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent {
  monster = input(new Monster());

  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  })

  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  })
}
