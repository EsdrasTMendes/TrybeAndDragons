import Race from './Race';

class Elf extends Race {
  private _maxPoints: number;
  private static _elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxPoints = 99;
    Elf._elfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxPoints;
  }

  static createdRacesInstances(): number {
    return Elf._elfInstances;
  }
}

export default Elf;