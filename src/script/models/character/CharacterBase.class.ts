import { ModelBase } from "../bases/ModelBases.class";
import { CharaAbility } from "./parts/CharaAbility.class";
import { CharaAge } from "./parts/CharaAge.class";
import { CharaName } from "./parts/CharaName.class";
import { Sex } from "./parts/Sex.type";

export class CharacterBase extends ModelBase {
  protected _name:CharaName;
  protected _abilities:CharaAbility[];
  protected _age:CharaAge;
  protected _sex:Sex;

  constructor(name:CharaName, birthday:CharaAge, abilities:CharaAbility[], sex:Sex) {
    super();
    this._name = name;
    this._age = birthday;
    this._abilities = abilities;
    this._sex = sex;
    
  }

}
