import { AllData } from "../models/AllData.class";
import { LoopSceneView } from "../views/LoopSceneView.class";

export class LoopSceneManager {
  protected _view:LoopSceneView;
  protected _parentElement:HTMLElement;
  protected _allData:AllData;

  constructor(allData:AllData, parentElement:HTMLElement) {
    this._allData = allData;
    this._view = this.makeViewer();
    this._parentElement = parentElement;
    this._parentElement.appendChild(this._view);
  }

  private turnUpdateButton():HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Next_Turn';
    return button;
  }

  private makeViewer():LoopSceneView {
    const viewer = new LoopSceneView();
    return viewer;
  }
}
