import { PanelBase } from "./bases/PanelBase.class";

export class ImagePanel extends PanelBase {
  constructor() {
    super();
    this.classList.add('image_panel');
  }
}
customElements.define('image-panel', ImagePanel, { extends: 'div' });
