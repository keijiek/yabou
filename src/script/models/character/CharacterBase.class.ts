import { ModelBase } from "../bases/ModelBases.class";

export class CharacterBase extends ModelBase {
  protected _name:string;

  constructor(name:string) {
    super();
    this._name = name;
  }
  
  get name():string {
    return this._name;
  }
}
