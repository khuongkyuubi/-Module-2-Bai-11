export class Queue<T> {
    private container: T[] = [];
    constructor() {
    }

    enqueue(item : T): T[] {
        this.container.push(item);
        return this.container;
    }

    dequeue(): T | undefined {
        return this.container.shift();
    }

    size(): number {
        return this.container.length;
    }

}