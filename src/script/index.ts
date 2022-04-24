import '../sass/style.scss';// sass もビルド対象にするため
import { MainController } from './controllers/MainController.class';

// HTML DOM 構造の読み込み終了直後。<body>の末尾の<script>タグと同じタイミング。
document.addEventListener('DOMContentLoaded', () => {
});

// 全てのリソースを読み込んだ直後。
window.onload = () => {
  new MainController(document.body);
}
