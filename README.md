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

There is no “Dictionary” in JavaScript,but you can create and use a dictionary object (see Dictionary.js)
Dictionary is also another word for Hash Tables.

#### Real world Example

You stay in a hotel for a few days. At the end of the day, when you return to the hotel, you ask the clerk if there are any messages for you. Behind him is the letter cupboard, with 26 entries, labeled A to Z. 
Because he knows your last name, he can go to the slot labeled C, and takes out three letters. One is for Lauren Crawshaw, Pete Covid, and one is for Jamie Crowther, me.
The clerk only had to inspect three letters. How many letters would he have to inspect if there would have been only one letter box?




Data Structures (29/5/2020)

Data Structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

Classes / ES6 Class
-Define our class (when naming class, ALWAYS start with capitol and continue with camel case). The body of a class is the part that is in
 curly brackets {}. This is where you define class members, such as methods or constructor.
-Must have a constructor, constructor must always be written as 'constructor', it is a special method that is used to initiate new student instances. 
-A constructor can use the super keyword to call the constructor of the super class (such as this.height, this.width)

this.firstName = firstName
this.lastName = lastName

-The static keyword defines a static method for a class. Static methods are called without instantiating their class (eg. var John = new Person();)and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

-When a static or prototype method is called without a value for this, the this value will be undefined inside the method. This behavior will be the same even if the "use strict" directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.




Stacks
Stack is a collection of data, an abstract data structure and operates on a LIFO system (Last In First Out).
Meaning that whatever you put in Last will be the first used First, a real example would be an actual stack of clothes in a bin, the last piece of clothing thrown in the bin will be the first thing to come out as it's on the top of the rest.
Stack is a concept,  it is basically a set of rules that store data in a way that the first thing added is the last thing removed. The last thing in the added is the first thing removed.

![alt text](https://github.com/TherealJC/Week-12/blob/master/stack%20process%20example.png)

![alt text](https://github.com/TherealJC/Week-12/blob/master/stacks.jpg)

Queues
Veyr similar to stack but operates on a FIFO system, first in first out (after logic is applied). Example of queue is just like an actual queue(or a single file line of people) the first person in the line is the first person out of the line

![alt text]()