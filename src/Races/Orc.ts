import Race from './Race';

class Orc extends Race {
  private _maxPoints: number;
  private static _OrcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxPoints = 74;
    Orc._OrcInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxPoints;
  }

  static createdRacesInstances(): number {
    return Orc._OrcInstances;
  }
}

export default Orc;