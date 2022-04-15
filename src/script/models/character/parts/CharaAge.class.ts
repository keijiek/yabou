export class CharaAge {
  private _birthday:Date;
  
  constructor(birthday:Date) {
    this._birthday = birthday;
  }

  age(today:Date):number {
    return Math.floor( (this._8digitDate(today) - this._8digitDate(this._birthday)) / 10_000 );
  }

  get birthday():Date {
    return this._birthday;
  }

  get birthYear():number {
    return this._birthday.getFullYear();
  }
  get birthMonth():number {
    return this._birthday.getMonth() + 1;
  }
  get birthDate():number {
    return this._birthday.getDate();
  }

  private _8digitDate(date:Date):number {
    return (date.getFullYear() * 10_000) + ((date.getMonth() + 1) * 100) + date.getDate();
  }
}
