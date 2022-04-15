import { CommandPanel } from "../parts/CommandPanel.class";
import { InfoPanel } from "../parts/InfoPanel.class";
import { ImagePanel } from "../parts/ImagePanel.class";
import { MessagePanel } from "../parts/MessagePanel.class";

export class SceneBase extends HTMLDivElement {
  protected _mapPanel:ImagePanel;
  protected _messagePanel:MessagePanel;
  protected _infoPanel:InfoPanel;
  protected _commandPanel:CommandPanel;

  constructor() {
    super();
    this.classList.add('scene');
    this._mapPanel = new ImagePanel();
    this._messagePanel = new MessagePanel();
    this._infoPanel = new InfoPanel();
    this._commandPanel = new CommandPanel();
    this.appendChild(this._mapPanel);
    this.appendChild(this._messagePanel);
    this.appendChild(this._infoPanel);
    this.appendChild(this._commandPanel);
  }

}
