"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// ‼️🛫 Delayed Departure from FAO to TXL (11h25)

// ‼️🛫 Delayed Departure
// ⌚🛫 Ontime Departure

// ‼️🛬 Delayed Arrival
// ⌚🛬 Ontime Arrival

// Time Format (11h24)

// Display OG string
console.log(flights);

let newArray = flights.split("+");
console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
  let [state, fromA, toA, fTime] = newArray[i].split(";");
  state = state.slice(1).replaceAll("_", " ");
  fromA = fromA.slice(0, 3).toUpperCase();
  toA = toA.slice(0, 3).toUpperCase();
  fTime = fTime.replace(":", "h");

  console.log(
    `${state[2] === "l" ? "‼️" : "⌚"}${
      state.endsWith("e") ? "🛫" : "🛬"
    } ${state} from ${fromA} to ${toA} (${fTime})`
  );
}
