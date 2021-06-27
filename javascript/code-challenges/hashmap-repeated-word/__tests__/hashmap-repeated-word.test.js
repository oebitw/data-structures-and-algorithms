'use strict';

const repeatedWord = require('../hashmap-repeated-word');


const phraseOne = 'Once upon a time, there was a brave princess who...';
const phraseTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const phraseThree = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
const phraseFour= '';


describe('Repeated Word Test', () => {
  it('Successfully returning the first repeated word', ()=>{
    expect(repeatedWord(phraseOne)).toBe('a');
    expect(repeatedWord(phraseTwo)).toBe('it');
    expect(repeatedWord(phraseThree)).toBe('summer');
    expect(repeatedWord(phraseFour)).toBe('Empty String');
  });

});
