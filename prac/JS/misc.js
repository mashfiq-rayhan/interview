// const apromise = new Promise((res, rej) => setTimeout(() => res(42), 1000));

// apromise.then((val) => console.log(val));

// function greet(age) {
//   console.log(this.name, age);
// }

// const person = {
//   name: 'Mash'
// };

// greet.call(person, 30);
// greet.apply(person, [30]);
// const fn = greet.bind(person, 30);

// fn();

// Debounce
// function debounce(fn, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     const timer = setTimeout(() => fn(...args), delay);
//   };
// }

// const search = debounce((text) => {
//   console.log('Searching For: ', text);
// }, 2000);

// document.getElementById('search').addEventListener('input', (e) => {
//   search(e.target.value);
// });

// Throttle

// function throttle(fn, delay) {
//   let last = 0;
//   return (...args) => {
//     const now = Date.now();
//     console.log(now);
//     if (now - last > delay) {
//       fn(...args);
//       last = now;
//     }
//   };
// }

// const logScroll = throttle(() => {
//   console.log('Scroll Position: ', window.scrollY);
// }, 2000);

// window.addEventListener('scroll', logScroll);

// function once(fn) {
//   let called = false;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn(...args);
//     }
//   };
// }

// const apromise = new Promise((res, rej) => setTimeout(() => res(42)));

// apromise.then((val) => console.log(val));

// const parent = {
//   greet(age) {
//     console.log('Hello');
//   }
// };

// const child = Object.create(parent);

// child.greet();

// const p = new Promise((res, rej) => setTimeout(() => res(42), 1000));

// p.then((val) => console.log(val));

function greet(age) {
  console.log(this.name, age);
}

const person = { name: 'Mash' };

greet.call(person, 31);
greet.apply(person, [31]);
fn = greet.bind(person, 31)
fn()