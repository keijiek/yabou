import { CommandPanel } from "../parts/CommandPanel.class";
import { InfoPanel } from "../parts/InfoPanel.class";
import { ImagePanel } from "../parts/ImagePanel.class";
import { MessagePanel } from "../parts/MessagePanel.class";
import { PanelBase } from "../parts/bases/PanelBase.class";

export class SceneBase extends HTMLDivElement {
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

    this.appendChild(this._container([this._imagePanel, this._infoPanel]));
    this.appendChild(this._container([this._messagePanel, this._commandPanel]));
  }

  private _container(panels:PanelBase[]):HTMLDivElement {
    const container = this._flexContainerDiv();
    panels.forEach(panel => container.appendChild(panel));
    return container;
  }

  private _flexContainerDiv():HTMLDivElement {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.padding = '0px';
    div.style.margin = '0px';
    return div;
  }

}
customElements.define('scene-base', SceneBase, { extends: 'div' });
