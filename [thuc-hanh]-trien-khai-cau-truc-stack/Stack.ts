export class Stack<T> {
    private container: T[] = [];

    constructor() {
    }

    push(item: T): T[] {
        this.container.push(item);
        return this.container;
    }

    pop(): T {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

}