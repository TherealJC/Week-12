# An introduction to JavaScript Hash Tables & Dictionaries

## What is a hash table ?

![alt text](https://github.com/TherealJC/Week-12/blob/master/hashtable.png)

1. A hash table, or hash map, is a data structure that can map 'keys' to values. Hash Tables in Computer Science are a data structure that allow you to store key value pairs in such a way that allows for very quick look-up.
2. A hash table uses a hash function to compute an 'index' AKA a hash code, into 'buckets' AKA slots from which a desired value can be found. The 'key' is hashed, and the resulting hash shows where the matching value is stored.
In many situations, hash tables turn out to be on average more efficient than search trees or any other table lookup structure.

![alt text](https://github.com/TherealJC/Week-12/blob/master/hash_function.jpg?raw=true)

2. Good Hash Tables with minimal collisions allow you to perform inserts, finds and deletes much quicker. This constant timing makes them incredibly valuable data-structures when compared to the likes of Arrays for instance. To find an element in an array, you would have to iterate through all elements of that array before finding the one you want. Depending on the size of the array, this could be quite time comnsuming.

![alt text](https://github.com/TherealJC/Week-12/blob/master/hash-table.png?raw=true)

3. Simple example: Above is a data structure that can store up to 1000 records with random integer keys.
To distribute the data evenly, we use several short lists. All records with keys that end with 000 belong to one list, those with keys that end with 001 belong to another one, and so on. There is a total of 1000 such lists.
This structure can be represented as an array of lists:

var table = new LinkedList[1000]..*   where LinkedList denotes a linked list of key-value pairs.

..1 Inserting a new record (key, value) is a two-step procedure: we extract the three last digits of the key, 

.hash = key % 1000,

..2 and then insert the key and its value into the list located at table[hash].

hash = key % 1000
table[hash].AddFirst(key, value)

..3 A lookup is implemented by:

value = table[key%1000].Find(key)

..4 Since the keys are random, there will be roughly the same number of records in each list. Since there are 1000 lists and at most 1000 records, there will likely be very few records in the list table[key%1000] and so the lookup operation will be fast.
The average time complexity of both the lookup and insert operations is O(1).

![alt text](https://github.com/TherealJC/Week-12/blob/master/hashbasic.png?raw=true)

4. When designing a hash table, we need to come up with a good hashing algorithm that meets the following basic requirements:
..*It must be efficient.
..*It must compute the same hash value for equal objects.
..*It should uniformly distribute our Hashes so that we don’t have clusters of hashes.
..*It should have a low hash collision factor.

### JavaScript Dictionary

There is no “Dictionary” in JavaScript,but you can create and use a dictionary object. The following steps show how to go about creating and populating a dictionary with Key/Value pairs:

1. Create new object 

var dict = new Object();

..*or the shorthand way

var dict = {};

You can also initialize the Dictionary with Key/Value pairs when creating it if you are using the shorthand method.

var dict = {
  FirstName: "Chris",
  "one": 1,
  1: "some value"
};

2. Populate Values on the Object

This can be done by either setting the values using the Object’s Indexer property, or just calling it directly as a standard property on the object. As you’ll see below the Key values can be any object and are not limited to Strings.

// using the Indexer
dict["one"] = 1;
dict[1] = "one";

// add new or update property
dict["Age"] = 42;

// direct property by name
// because it's a dynamic language
dict.FirstName = "Chris";

3. A for loop can be used to iterate through the dictionary.

for(var key in dict) {
  var value = dict[key];

  // do something with "key" and "value" variables
}

By using the “for(var key in dict)” method of iterating on the object you are able to easily access all the key/value pairs in contains. This method will iterate with each “key” value being the Index on the Object that can be used to access the associated Value.

Examples of using a Function in both Key and Value of a Dictionary:

var dict = {};

var f = function() {
  // do something
};

// setup Function as Value
dict['method'] = f;

// setup Function as Key
dict[f] = 'some value';

// execute Function from Value
dict['method']();

var method = dict.method;
method();

// get value for Key
var val = dict[f];
