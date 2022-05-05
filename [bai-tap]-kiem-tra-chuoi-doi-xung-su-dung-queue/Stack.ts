export class Stack<T> {
    private container: T[] = [];

    constructor() {
    }
    getContainer(): T[] {
        return this.container;
    }

    push(item: T): number {
        this.container.push(item);
        return this.container.length;
    }

    // pop return undefined khi k lấy được gì ra
    pop(): T | undefined {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }
}