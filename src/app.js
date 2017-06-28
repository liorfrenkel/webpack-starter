// entry point

// js
import object1 from './js/module1/module1';
import object2 from './js/module2';

// css
import styles from './css/styles1.css';

// sass
import scssStyles from './scss/main.scss';

console.log('object1.a: ' + object1.a);
console.log('object1.b: ' + object1.b);
console.log('object2.c: ' + object2.c);
console.log('object2.d: ' + object2.d);

// es6 features
const arrowFuc = () => {
  console.log('hello from arrow function');
};

arrowFuc();