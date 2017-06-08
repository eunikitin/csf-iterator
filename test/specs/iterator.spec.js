import { expect } from 'chai';

import Iterator from 'Src/iterator';

import sheet1x1Object from '../fixtures/sheet/1x1/sheet';


describe('Iterator', () => {
  let iterator;

  it('should set sheet property on initialization', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.sheet).to.equal(sheet1x1Object);
  });

  it('should set position property on initialization as first column and row indices', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.position).to.deep.equal({
      column: sheet1x1Object.first.column,
      row: sheet1x1Object.first.row,
    });
  });

  describe('selectColumns', () => {
    it('should return unique and sorted sequence of numbers', () => {
      expect(Iterator.selectColumns([1, 5, 2, 2, 6])).to.deep.equal([1, 2, 5, 6]);
    });
  });
});
