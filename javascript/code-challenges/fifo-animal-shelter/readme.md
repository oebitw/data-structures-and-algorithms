# fifo-animal-shelter


## Challenge

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

## Approach & Efficiency

1) create a new class named AnimalShelter.


2) add the following properties to the class (cats,dogs)

3) Create enqueue method that accepts an animal as input , check if it cat or dog, if  it's false return exception else if it's dog enqueue it to the dog queue else if it's cat enqueue it to the cats queue.


`enqueue`

// Input: 

// Output: new animal added to the queue of the animal

3) Create enqueue method that accepts an animal as input , check if it cat or dog, if  it's false return exception else if it's dog enqueue it to the dog queue else if it's cat enqueue it to the cats queue.



`dequeue`

// Input: Preferred Animal

// Output: dequeue animal from the shelter based on it's type

4) Create dequeue method that takes the preferred animal as input, check the queue of that animal and dequeue an animal from it.









## API

1) `enqueue(animal):` adds animal to the shelter. animal can be either a dog or a cat object.

2) `dequeue(pref):` returns either a dog or a cat. If pref is not "dog" or "cat" then return null.


## Testing

`npm test`



## Solution

![](./img/whiteboard.jpg)
