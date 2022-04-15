import { PanelBase } from "./bases/PanelBase.class";

export class CommandPanel extends PanelBase {
  constructor() {
    super();
    this.classList.add('command_panel');
  }
}