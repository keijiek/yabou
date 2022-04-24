import { GameDate } from "../models/time/GameDate.class";

export class GameDateGenerator {
  private constructor(){}

  static generate():GameDate {
    const gameDate = new GameDate();
    gameDate.setFullYear(800,1,1);
    return gameDate;
  }
}
