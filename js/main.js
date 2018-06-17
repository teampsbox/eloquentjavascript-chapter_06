// // METHODS - object.method()
// let rabbit = {};
// rabbit.speak = function(line) {
//   console.log(`The rabbit says '${line}`);
// };

// rabbit.speak("I'm alive!");

// // this BINDING
// function speak(line) {
//   console.log(`The "${this.type}"  rabbit says ${this.color}  ${line}`);
// }
// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { color: "gray", type: "hungry", speak };

// whiteRabbit.speak("Oh my ears and whiskers," + " how late it's getting");

// hungryRabbit.speak("I could use a carrot right now.");

// speak.call(hungryRabbit, "Burp!");

// // this Binding - Arrow Function
// function normalize() {
//   console.log(this.coords.map(n => n / this.length));
// }
// normalize.call({ coords: [0, 2, 3], length: 2 });

// PROTOTYPES
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
