import style from './style.css';
import template from './template.html';

export default class Module2 {
  writeToDocument() {
    document.write(template);
  }
}