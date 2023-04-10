const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._queue = {value: null, next: null};
  }

  getUnderlyingList() {
    return this._queue.value ? this._queue : null;
  }

  enqueue(value) {
    const newEl = new ListNode(value);

    const setNewEl = (currentEl, newEl) => {
      if (currentEl.next === null) {
        currentEl.next = newEl;
      } else {
        setNewEl(currentEl.next, newEl);
      }
    };

    if (this._queue.value === null) {
      this._queue = newEl;
    } else {
      setNewEl(this._queue, newEl);
    }
  }

  dequeue() {
    const value = this._queue.value;

    if (this._queue.next) {
      this._queue = this._queue.next;
    } else {
      this._queue = {value: null, next: null};
    }

    return value;
  }
}

module.exports = {
  Queue
};
