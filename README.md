# H1 An introduction to JavaScript Hash Tables & Dictionaries

## H2 What is a hash table ?

![alt text](https://github.com/TherealJC/Week-12/blob/master/hashtable.png)

1. A hash table, or hash map, is a data structure that can map 'keys' to values. Hash Tables in Computer Science are a data structure that allow you to store key value pairs in such a way that allows for very quick look-up.
2. A hash table uses a hash function to compute an 'index' AKA a hash code, into 'buckets' AKA slots from which a desired value can be found. The 'key' is hashed, and the resulting hash shows where the matching value is stored.
In many situations, hash tables turn out to be on average more efficient than search trees or any other table lookup structure.

<div style="text-align:center"><img src="..." />
![alt text](https://github.com/TherealJC/Week-12/blob/master/hash_function.jpg?raw=true)
</div>

2. Good Hash Tables with minimal collisions allow you to perform inserts, finds and deletes much quicker. This constant timing makes them incredibly valuable data-structures when compared to the likes of Arrays for instance. To find an element in an array, you would have to iterate through all elements of that array before finding the one you want. Depending on the size of the array, this could be quite time comnsuming.

![alt text](https://github.com/TherealJC/Week-12/blob/master/hash-table.png?raw=true)
