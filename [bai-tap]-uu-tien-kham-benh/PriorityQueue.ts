import {Patient} from "./Patient";

export class PriorityQueue {
    private container: Patient[] = [];

    constructor() {
    }

    enqueue(...item: Patient[]): number {
        this.container.push(...item);
        return this.container.length;
    }

    sort(): Patient[] {
        this.container.sort(({code: a}, {code: b}) => {
            return a - b;
        })
        return this.container;
    }

    dequeue(): Patient | undefined {
        return this.sort().pop();
    }


    // dequeue(): Patient | undefined {
    //     let maxCode = this.container[0].code;
    //     let index = 0;
    //     for (let i in this.container) {
    //         if (this.container[i].code > maxCode) {
    //             maxCode = this.container[i].code;
    //             index = +i;
    //         }
    //     }
    //
    //     return this.container.splice(index, 1)[0];
    // }

    size(): number {
        return this.container.length;
    }

    show(): void {
        console.log(this.container);
    }

    check(): void {
        console.log(`Mời bệnh nhân ${this.dequeue().name} vào khám`)
    }
}