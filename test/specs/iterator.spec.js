import { expect } from 'chai';

import Iterator from 'Src/iterator';

import sheetObject from '../fixtures/sheet-object';


describe('Iterator', () => {
  let iterator;

  it('should set sheet property on initialization', () => {
    iterator = new Iterator(sheetObject);
    expect(iterator.sheet).to.equal(sheetObject);
  });

  it('should set position property on initialization as first row index', () => {
    iterator = new Iterator(sheetObject);
    expect(iterator.position).to.equal(sheetObject.firstRow);
  });

  describe('selectColumns', () => {
    it('should return unique and sorted sequence of numbers', () => {
      expect(Iterator.selectColumns([1, 5, 2, 2, 6])).to.deep.equal([1, 2, 5, 6]);
    });
  });
});
