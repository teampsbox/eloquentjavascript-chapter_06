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

// // PROTOTYPES
// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// // CREATE AN OBJECT WITH A SPECIFIC PROTOTYPE - Object.create()
// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEE!");

// // CONSTRUCTOR FUNCTION
// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// // PROTOTYPE OBJECT
// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");
// weirdRabbit.speak("I'm weird!");

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

// CLASS NOTATION
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit("killer");
// killerRabbit.speak("I'm a killer!");
// let blackRabbit = new Rabbit("black");
// blackRabbit.speak("I'm black!");

// // OMIT CLASS NAME IN A CLASS EXPRESSION
// let object = new class {
//   getWord() {
//     return "hello";
//   }
// }();
// console.log(object.getWord());

// // OVERRIDING DERIVED PROPERTIES
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);

// killerRabbit.teeth = "long, sharp and bloody";
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);

// console.log(Array.prototype.toString == Object.prototype.toString);
// console.log([1, 2].toString());
// console.log(Object.prototype.toString.call([1, 2]));

// // MAPS
// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Julia: 62
// };
// console.log(`Julia is ${ages["Julia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);
// console.log("Is toString's age known", "toString" in ages);
// console.log("toString" in Object.create(null));

// // Map CLASS - set, get and has
// let ages = new Map();
// ages.set("Boris", 39);
// ages.set("Liang", 22);
// ages.set("Julia", 62);

// console.log(`Julia is ${ages.get("Julia")}`);
// console.log("Is Jack's age known?", ages.has("Jack"));
// console.log(ages.has("toString"));

// console.log({ x: 1 }.hasOwnProperty("x"));
// console.log({ x: 1 }.hasOwnProperty("toString"));

// // POLYMORPHISM
// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.toString = function() {
//   return `a ${this.type} rabbit`;
// };
// let blackRabbit = new Rabbit("black");
// console.log(String(blackRabbit));

//
