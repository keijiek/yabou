export class PanelBase extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add('panel');
  }
}
customElements.define('panel-base', PanelBase, { extends: 'div' });
