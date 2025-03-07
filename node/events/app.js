// Import EventEmiter class
const EventEmiter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmiter();
// 1. Define an event listner (addListener)
// emitter.on("greet", () => {
//     console.log("Hello Somya, heheheh");
// })
// // 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//  You can also pass arguments while emitting

// emitter.on("greet", (name, prof) => {
//     console.log(`Hello ${name} aka ${prof}`);
// })
// emitter.emit("greet", "Soham", "Full Stack Developer");

emitter.on("greet", (arg) => {
    console.log(`Hello ${arg.name} aka ${arg.prof}`);
})
emitter.emit("greet", {name: "Soham", prof: "Full Stack Developer"});