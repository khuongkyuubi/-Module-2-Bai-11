export class Queue<T> {
    private container: T[] = [];

    constructor() {
    }

    getContainer(): T[] {
        return this.container;
    }

    enqueue(item: T): number {
        this.container.push(item);
        return this.container.length;
    }

    dequeue(): T | undefined {
        return this.container.shift();
    }

    size(): number {
        return this.container.length;
    }

}