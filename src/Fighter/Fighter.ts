import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  special(enemy: Fighter): void;
  energy?: Energy
  levelUp():void;
}

export default Fighter;