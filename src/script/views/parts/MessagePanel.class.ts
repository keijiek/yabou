import { PanelBase } from "./bases/PanelBase.class";

export class MessagePanel extends PanelBase {
  protected messages:string[] = [];

  constructor() {
    super();
    this.classList.add('message_panel');
  }

  display():void {
    
  }
}
customElements.define('message-panel', MessagePanel, { extends: 'div' });