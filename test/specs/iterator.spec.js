import { expect } from 'chai';

import Iterator from 'Src/iterator';

import sheet1x1 from '../fixtures/1x1/data';
import sheet1x1Object from '../fixtures/1x1/sheet';

import sheet2x2 from '../fixtures/2x2/data';
import sheet2x2Object from '../fixtures/2x2/sheet';

import sheet1x1Offset from '../fixtures/1x1-offset/data';
import sheet1x1OffsetObject from '../fixtures/1x1-offset/sheet';

import sheet2x2Offset from '../fixtures/2x2-offset/data';
import sheet2x2OffsetObject from '../fixtures/2x2-offset/sheet';


describe('Iterator', () => {
  let iterator;

  it('should set sheet property on initialization', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.sheet).to.equal(sheet1x1Object);
  });

  it('should set position property on initialization as first row index', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.position).to.equal(sheet1x1Object.firstRow);
  });

  describe('selectColumns', () => {
    it('should return unique and sorted sequence of numbers', () => {
      expect(Iterator.selectColumns([1, 5, 2, 2, 6])).to.deep.equal([1, 2, 5, 6]);
    });
  });
});
