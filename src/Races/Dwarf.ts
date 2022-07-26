import Race from './Race';

class Dwarf extends Race {
  private _maxPoints: number;
  private static _DwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxPoints = 80;
    Dwarf._DwarfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxPoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._DwarfInstances;
  }
}

export default Dwarf;