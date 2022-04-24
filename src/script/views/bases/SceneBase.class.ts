import { CommandPanel } from "../parts/CommandPanel.class";
import { InfoPanel } from "../parts/InfoPanel.class";
import { ImagePanel } from "../parts/ImagePanel.class";
import { MessagePanel } from "../parts/MessagePanel.class";
import { PanelBase } from "../parts/bases/PanelBase.class";

export class SceneViewBase extends HTMLDivElement {
  protected _imagePanel:ImagePanel;
  protected _messagePanel:MessagePanel;
  protected _infoPanel:InfoPanel;
  protected _commandPanel:CommandPanel;

  constructor() {
    super();
    this.classList.add('scene');
  
    this._imagePanel = new ImagePanel();
    this._messagePanel = new MessagePanel();
    this._infoPanel = new InfoPanel();
    this._commandPanel = new CommandPanel();

    this.appendChild(this._panelsContainer([this._imagePanel, this._infoPanel]));
    this.appendChild(this._panelsContainer([this._messagePanel, this._commandPanel]));
  }

  setButtons(buttons:HTMLButtonElement[]):void {
    this._commandPanel.setButtons(buttons);
  }

  private _panelsContainer(panels:PanelBase[]):HTMLDivElement {
    const container = this._flexContainerDiv();
    this.classList.add('panels_container');
    panels.forEach(panel => container.appendChild(panel));
    return container;
  }

  private _flexContainerDiv():HTMLDivElement {
    const div = document.createElement('div');
    return div;
  }

}
customElements.define('scene-base', SceneViewBase, { extends: 'div' });
