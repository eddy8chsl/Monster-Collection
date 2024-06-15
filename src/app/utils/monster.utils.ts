import { Monster } from "../models/monster.model";

export enum MonsterType {
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
  PLANT = "plant"
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties:  {[key:string]: IMonsterProperties} = {
  [MonsterType.ELECTRIC]: {
    imageUrl: "../../assets/img/electric.png",
    color: "rgba(255, 255, 104)"
  },

  [MonsterType.FIRE]: {
    imageUrl: "../../assets/img/feu.png",
    color: "rgba(255, 104, 104)"
  },

  [MonsterType.WATER]: {
    imageUrl: "../../assets/img/eau.png",
    color: "rgba(44, 166, 214)"
  },

  [MonsterType.PLANT]: {
    imageUrl: "../../assets/img/plant.png",
    color: "rgba(20, 205, 29)"
  }
}
