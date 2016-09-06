function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;

    if (size) {
        deletedData = this._storage[size];
         delete this._storage[size];
        this._size--;
         return deletedData;
    }
};
Stack.prototype.peek = function(index) {
	    var size = this._size,
	        peekData;

	    if (index <= size) {
	        peekData = this._storage[index];
	        return peekData;
	    }
};

var stack=new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log(stack.peek(2));
console.log(stack.peek(1));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


