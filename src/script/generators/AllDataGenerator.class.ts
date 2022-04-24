import { AllData } from "../models/AllData.class";
import { GameDateGenerator } from "./GameDateGenerator.class";

export class AllDataGenerator {
  constructor() {}

  static generate():AllData {
    return new AllData(GameDateGenerator.generate());
  }
}