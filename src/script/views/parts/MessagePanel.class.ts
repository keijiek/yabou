import { PanelBase } from "./bases/PanelBase.class";

export class MessagePanel extends PanelBase {
  constructor() {
    super();
    this.classList.add('message_panel');
  }
}