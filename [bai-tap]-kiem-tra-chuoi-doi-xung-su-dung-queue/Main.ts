import {Stack} from "./Stack";
import {Queue} from "./Queue";

const stack = new Stack();
const queue = new Queue();

let str = "able was I ere I saw elba";

for (let char of str) {
    stack.push(char);
    queue.enqueue(char);
}

if (stack.size() === queue.size()) {
    let flag = true;
    for (let i = 0; i < stack.size(); i++) {
        if (stack.pop() !== queue.dequeue()) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(str, " : Là chuỗi đối xứng");
    } else {
        console.log("Error!!")
    }


} else {
    console.log(str, " : Không là chuỗi đối xứng");
}

