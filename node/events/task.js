//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const filePath = path.join(__dirname,"eventCounts.json");

let eventCounts = {};
try{
    if(fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        eventCounts = JSON.parse(data);
    } else {
        eventCounts = {
            "user-login": 0,
            "user-logout": 0,
            "user-purchase": 0,
            "profile-update": 0,
        };
    }
}catch(error) {
    console.error("Error :", error);
}

const saveCounts = () => {
    fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2));
};

emitter.on("user-login", (name) => {
    eventCounts['user-login']++;
    console.log(`${name} loged in successfully`);
    saveCounts();
});
emitter.on("user-logout", (name) => {
    eventCounts['user-logout']++;
    console.log(`User: ${name} Logged out successfully`);
    saveCounts();
});
emitter.on("user-purchase", (name, item) => {
    eventCounts['user-purchase']++;
    console.log(`${name} purchased ${item}`);
    saveCounts();
});
emitter.on("profile-update", (name, service) => {
    eventCounts['profile-update']++;
    console.log(`${name} updated their ${service}`);
    saveCounts();
});

emitter.on("summary-report", () => {
    console.log(eventCounts);
});

emitter.emit("user-login", "Soham");
emitter.emit("user-purchase", "Soham", "Pre-workout");
emitter.emit("user-purchase", "Soham", "Pre-workout");
emitter.emit("user-purchase", "Soham", "Pre-workout");
emitter.emit("user-purchase", "Soham", "Pre-workout");
emitter.emit("profile-update", "Soham", "email");
emitter.emit("user-logout", "Soham");
emitter.emit("summary-report");