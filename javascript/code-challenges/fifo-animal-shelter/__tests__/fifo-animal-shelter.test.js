const AnimalShelter = require('../fifo-animal-shelter.js');
const shelter = new AnimalShelter();



describe('Animal Shelter Queue Test', () => {

  it('Test instantiating empty queue', () => {
    expect(shelter.dog.front).toBeNull();
    expect(shelter.cat.front).toBeNull();
  });

  it('Test enqueue a cat', () => {
    let animal = 'cat';
    shelter.enqueue(animal);
    expect(shelter.cat.front.value).toEqual(animal);
    expect(shelter.dog.front).toBeNull();
    expect(shelter.animals.rear.value).toEqual(animal);
  });

  it('Test enqueue a dog', () => {
    let animal = 'dog';
    shelter.enqueue(animal);
    expect(shelter.dog.front.value).toEqual(animal);
    expect(shelter.animals.rear.value).toEqual(animal);
  });

  it('Test returning exception if the input is not dog or cat', () => {
    let animal = 'parrot';
    expect(shelter.enqueue(animal)).toEqual(
      'You Can only add cat or dog to this shelter'
    );
  });


  it('Test dequeue preferred animal from enqueue', () => {
    let animal = 'cat';
    shelter.enqueue(animal);
    expect(shelter.cat.rear.value).toEqual(animal);
    expect(shelter.dequeue('cat').front.value).toEqual('cat');
  });


  it(' Return Exception when dequeue other animals', () => {
    expect(shelter.dequeue('parrot')).toBeNull();
  });

  it('should dequeue from existing queue if there is no preferred animal', () => {
    expect(shelter.dequeue()).toBeDefined();
    let animal = 'dog';
    shelter.enqueue(animal);
    expect(shelter.dequeue()).toBeDefined();
  });
});
