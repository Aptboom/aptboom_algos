import {whitelist_select, giveaway_select} from "./selector.js";

// just a simple landing page to test the functions out with a simple 'node landing.js'
var c = whitelist_select(4);
console.log(c);

var c2 = giveaway_select(3);
console.log(c2);