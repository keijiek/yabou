import { SceneBase } from "./bases/SceneBase.class";

export class LoopTestScene extends SceneBase {
  constructor() {
    super();
    this.classList.add('loop_test');
  }


}
customElements.define('looptest-scene', LoopTestScene, { extends: 'div' });
