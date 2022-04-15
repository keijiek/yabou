export class CharaAbility {
  private _name:string;
  private _value:number;

  constructor(name:string, initialValue:number) {
    this._name = name;
    this._value = Math.floor(initialValue);
  }

  get name():string {
    return this._name;
  }
  get value():number {
    return this._value;
  }

  increase(amount:number):void {
    this._value += Math.floor(amount);
  }
}
