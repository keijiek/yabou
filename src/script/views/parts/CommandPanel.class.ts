import { PanelBase } from "./bases/PanelBase.class";

export class CommandPanel extends PanelBase {
  protected buttons:HTMLButtonElement[] = [];

  constructor() {
    super();
    this.classList.add('command_panel');
  }

  setButtons(buttons:HTMLButtonElement[]):void {
    this.buttons.concat(buttons);
  }
}
customElements.define('command-panel', CommandPanel, { extends: 'div' });
