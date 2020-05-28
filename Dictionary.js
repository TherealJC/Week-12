//1.Create new object
var dict = new Object();

//or the shorter way
var dict = {};

//can be initialized with Key/Value pairs when created using shor way 
var dict = { 
    FirstName: "Chris", "one": 1, 1: "some value" 
};

//2.Fill Values on Object by either setting the values using the Object’s Indexer
// property, or just calling it directly as a standard property on the object.

// using the Indexer 
dict["one"] = 1; dict[1] = "one";

// add new or update property 
dict["Age"] = 42;
dict.FirstName = "Chris";

//A for loop can be used to iterate through the dictionary.
for(var key in dict) { var value = dict[key];
// ^^^ do something with "key" and "value" variables
}

//By using the “for(var key in dict)” method of iterating on the object you are able to easily
//access all the key/value pairs in contains. This method will iterate with each “key” value being
//the Index on the Object that can be used to access the associated Value.



//Examples of using a Function in both Key and Value of a Dictionary:

var dict = {};

var f = function() { // do something
};
// setup Function as Value
dict['method'] = f;

// setup Function as Key
dict[f] = 'some value';

// execute Function from Value dict'method';
var method = dict.method; method();

// get value for Key
var val = dict[f];