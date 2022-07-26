import Race from './Race';

class Halfling extends Race {
  private _maxPoints: number;
  private static _HalflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxPoints = 60;
    Halfling._HalflingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxPoints;
  }

  static createdRacesInstances(): number {
    return Halfling._HalflingInstances;
  }
}

export default Halfling;