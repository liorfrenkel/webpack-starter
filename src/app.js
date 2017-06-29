// entry point

// js
import Module1 from './components/component1/module1';
import Module2 from './components/component2/module2';
import object2 from './js/module2';

// css
import styles from './css/styles1.css';

// sass
import scssStyles from './scss/main.scss';

document.write('<br><br>');
let module1 = new Module1();
module1.writeToDocument();

document.write('<br>');
let module2 = new Module2();
module2.writeToDocument();

document.write('<br>');
document.write('<div>object2.c: '+ object2.c +'</div>');
document.write('<div>object2.d: '+ object2.d +'</div>');

// es6 features
const arrowFuc = () => {
  document.write('<br>');
  document.write('<div>hello from arrow function</div>');
};

arrowFuc();