const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        return this.getNode(index).data;
    }

    getNode(index) {
        if (index >= 0 && index < this.length) {
            var node = this._head;
            while (index--) {
                node = node.next;
            }
        }
        return node;
    }

    insertAt(index, data) {
        if (this.length === 0) {
            this.append(data);
        }
        else {
            var node = null;
            if (index >= 0 && index < this.length) {
                node = this._head;
                while (index--) {
                    node = node.next;
                }
            }

            var insertNode = new Node(data, node.prev, node);
            node.prev.next = insertNode;
            node.prev = insertNode;
        }

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index >= 0 && index < this.length) {
            var node = this._head;
            while (index--) {
                node = node.next;
            }
        }

        if (this._tail === node) {
            this._tail = node.prev;
        }
        else {
            node.next.prev = node.prev;
        }
        if (this._head === node) {
            this._head = node.next;
        }
        else {
            node.prev.next = node.next;
        }

        this.length--;

        return this;
    }

    reverse() {
        var curr = this._head;
        var temp = null;
        this._tail = this._head;

        while (curr !== null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        if (temp !== null) {
            this._head = temp.prev;
        }

        return this;
    }

    indexOf(data) {
        for (var i=0; i < this.length; i++) {
            if (data === this.getNode(i).data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
