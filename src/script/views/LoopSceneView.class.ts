import { SceneViewBase } from "./bases/SceneBase.class";

export class LoopSceneView extends SceneViewBase {

  constructor() {
    super();
    this.classList.add('loop_test');
  }

}
customElements.define('loop-scene', LoopSceneView, { extends: 'div' });
