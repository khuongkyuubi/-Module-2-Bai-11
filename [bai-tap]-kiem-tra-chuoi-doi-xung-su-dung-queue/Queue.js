"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.getContainer = function () {
        return this.container;
    };
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
        return this.container.length;
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
exports.Queue = Queue;
