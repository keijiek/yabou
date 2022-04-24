import { ModelBase } from "../bases/ModelBases.class";
import { CharaAbility } from "./parts/CharaAbility.class";
import { CharaAge } from "./parts/CharaAge.class";
import { CharaName } from "./parts/CharaName.class";
import { Sex } from "./parts/Sex.type";

export class CharacterBase extends ModelBase {
  protected _name:CharaName;
  protected _attributes:CharaAbility[];
  protected _age:CharaAge;
  protected _sex:Sex;

  constructor(name:CharaName, birthday:CharaAge, attributes:CharaAbility[], sex:Sex) {
    super();
    this._name = name;
    this._age = birthday;
    this._attributes = attributes;
    this._sex = sex;
  }

  get name():CharaName {
    return this._name;
  }

  get attributes():CharaAbility[] {
    return this._attributes;
  }

  get age():CharaAge {
    return this._age;
  }

  get sex():Sex {
    return this._sex;
  }
}
