"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.container = [];
    }
    PriorityQueue.prototype.enqueue = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        (_a = this.container).push.apply(_a, item);
        return this.container.length;
    };
    PriorityQueue.prototype.sort = function () {
        this.container.sort(function (_a, _b) {
            var a = _a.code;
            var b = _b.code;
            return a - b;
        });
        return this.container;
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.sort().pop();
    };
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
    PriorityQueue.prototype.size = function () {
        return this.container.length;
    };
    PriorityQueue.prototype.show = function () {
        console.log(this.container);
    };
    PriorityQueue.prototype.check = function () {
        console.log("M\u1EDDi b\u1EC7nh nh\u00E2n ".concat(this.dequeue().name, " v\u00E0o kh\u00E1m"));
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
