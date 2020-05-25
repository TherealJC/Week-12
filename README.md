# H1 An introduction to JavaScript Hash Tables & Dictionaries

## H2 What is a hash table ?

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

..*var table = new LinkedList[1000]..*
where LinkedList denotes a linked list of key-value pairs.
..*Inserting a new record (key, value) is a two-step procedure: we extract the three last digits of the key, 

..*hash = key % 1000,

and then insert the key and its value into the list located at table[hash].

..*hash = key % 1000
..*table[hash].AddFirst(key, value)

This is a constant time operation.

A lookup is implemented by:

..*value = table[key%1000].Find(key)

Since the keys are random, there will be roughly the same number of records in each list. Since there are 1000 lists and at most 1000 records, there will likely be very few records in the list table[key%1000] and therefore the lookup operation will be fast.
The average time complexity of both the lookup and insert operations is O(1).

4. When designing a hash table, we need to come up with a good hashing algorithm that meets the following basic requirements:
..*It must be efficient.
..*It must compute the same hash value for equal objects.
..*It should uniformly distribute our Hashes so that we don’t have clusters of hashes.
..*It should have a low hash collision factor.

