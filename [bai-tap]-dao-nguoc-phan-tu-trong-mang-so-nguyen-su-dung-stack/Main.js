"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var stackRevere = new Stack_1.Stack();
var numsString = "185421695784235";
for (var _i = 0, numsString_1 = numsString; _i < numsString_1.length; _i++) {
    var num = numsString_1[_i];
    stack.push(+num);
}
var size = stack.size();
for (var i = 0; i < size; i++) {
    stackRevere.push(stack.pop());
}
console.log(stackRevere);
