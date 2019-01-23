import chai from 'chai';
import sum from '../src/sum';

const { expect } = chai;

describe('sum', () => {
  it('adds numbers', () => {
    const result = sum(3, 4);
    expect(result).to.equal(7);
  });
});
