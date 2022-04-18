export class CharaName {
  name:string;
  surName:string;
  middleName:string;
  nickName:string;

  constructor(name:string, surName:string = '', middleName:string = '', nickName:string = '') {
    this.name = name;
    this.surName = surName;
    this.middleName = middleName;
    this.nickName = nickName;
  }
}
