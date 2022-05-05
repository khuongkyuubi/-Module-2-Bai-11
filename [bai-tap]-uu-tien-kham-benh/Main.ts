import {Patient} from "./Patient";
import {PriorityQueue} from "./PriorityQueue";

let patient1 = new Patient("Smith", 5);
let patient2 = new Patient("Jones", 4);
let patient3 = new Patient("Fehrenbach", 6);
let patient4 = new Patient("Brown", 1);
let patient5 = new Patient("Ingram", 1);

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(patient1, patient2, patient3, patient4, patient5);

priorityQueue.show();
priorityQueue.sort();
priorityQueue.show();
priorityQueue.check();

