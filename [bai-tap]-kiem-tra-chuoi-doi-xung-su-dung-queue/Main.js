"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
var str = "able was I ere I saw elba";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    stack.push(char);
    queue.enqueue(char);
}
if (stack.size() === queue.size()) {
    var flag = true;
    for (var i = 0; i < stack.size(); i++) {
        if (stack.pop() !== queue.dequeue()) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(str, " : Là chuỗi đối xứng");
    }
    else {
        console.log(str, " : Không là chuỗi đối xứng");
    }
}
else {
    console.log("Error!!!");
}
