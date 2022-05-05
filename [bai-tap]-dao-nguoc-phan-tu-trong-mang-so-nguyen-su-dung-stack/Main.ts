import {Stack} from "./Stack";

const stack = new Stack<number>();
const stackRevere = new Stack<number>();

let numsString = "185421695784235";

for (let num of numsString) {
    stack.push(+num);
}
let size = stack.size();
for (let i = 0; i < size ; i++) {
    stackRevere.push(stack.pop());
}
console.log(stackRevere);