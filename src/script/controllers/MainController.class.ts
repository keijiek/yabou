import { AllDataGenerator } from "../generators/AllDataGenerator.class";
import { AllData } from "../models/AllData.class";
import { LoopSceneManager } from "./LoopSceneManager.class";

export class MainController {
  protected _elementTobeParent:HTMLElement;
  protected _allData:AllData;
  protected _loopSceneManager:LoopSceneManager;

  constructor(elementTobeParent:HTMLElement) {
    this._elementTobeParent = elementTobeParent;
    this._allData = AllDataGenerator.generate();
    console.log(this._elementTobeParent);
    this._loopSceneManager =  new LoopSceneManager(this._allData, this._elementTobeParent);
  }

}