import events from "../../data/data/events.json" assert { type: "json" };
import names from "../../data/data/names.json" assert { type: "json" };
import { getCrimesOnData } from "./getCrimesOnData.js";
console.log(names);
console.log(events);

const timeLineEvents = events.reverse().splice(0, 100);
console.log(timeLineEvents);
getCrimesOnData(timeLineEvents);
