import { assert, expect } from 'chai';
import sinon from 'sinon';

import insert from '../../../../src/operations/insert';

import iteratorObject from '../../../fixtures/iterator/5x2';

let iterator;
let bound;
let calculateSheetPropertiesSpy;

beforeEach(() => {
  iterator = iteratorObject();
  iterator.sheet.calculateSheetProperties = function calculateSheetProperties() {};
  calculateSheetPropertiesSpy = sinon.spy(iterator.sheet, 'calculateSheetProperties');
  bound = insert.row.bind(iterator);
});

it('should insert row at current iterator position if index argument is null', () => {
  const position = iterator.position.row;
  const row = [1, 2, 3, 4, 5];
  bound(null, row);
  expect(iterator.sheet.aoa[position - 1]).to.equal(row);
});

it('should insert row at specified iterator position', () => {
  const position = iterator.position.row;
  const row = [1, 2, 3, 4, 5];
  bound(1, row);
  expect(iterator.sheet.aoa[position - 1]).to.equal(row);
});

it('should trigger properties recalculation of sheet', () => {
  bound(null, []);
  assert(calculateSheetPropertiesSpy.called);
});

it('should increment row iterator position', () => {
  const position = iterator.position.row;
  bound(null, []);
  expect(iterator.position.row).to.equal(position + 1);
});

it('should throw an Error if object argument is not instance of array', () => {
  expect(bound).to.throw(Error);
});
