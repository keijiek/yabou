import { GameDate } from "./time/GameDate.class";

export class AllData {
  protected _gameDate:GameDate;

  constructor(gameDate:GameDate) {
    this._gameDate = gameDate;
  }

  get gameDate():GameDate {
    return this._gameDate;
  }
}