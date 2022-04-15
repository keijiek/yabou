import { PanelBase } from "./bases/PanelBase.class";

export class InfoPanel extends PanelBase {
  constructor() {
    super();
    this.classList.add('info_panel');
  }
}