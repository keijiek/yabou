import { CharacterBase } from "./CharacterBase.class";
import { CharaAbility } from "./parts/CharaAbility.class";
import { CharaAge } from "./parts/CharaAge.class";
import { CharaName } from "./parts/CharaName.class";
import { Sex } from "./parts/Sex.type";

export class Lord extends CharacterBase {

  constructor(name:CharaName, birthday:CharaAge, attributes:CharaAbility[], sex:Sex) {
    super(name, birthday, attributes, sex);
  }
  
}
