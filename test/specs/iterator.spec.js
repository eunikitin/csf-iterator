import { expect } from 'chai';

import Iterator from 'Src/iterator';

import sheet1x1Object from '../fixtures/1x1/sheet';
import sheet1x1DataAoa from '../fixtures/1x1/data-aoa';

import sheet2x2Object from '../fixtures/2x2/sheet';
import sheet2x2DataAoa from '../fixtures/2x2/data-aoa';

import sheet1x1OffsetObject from '../fixtures/1x1-offset/sheet';
import sheet1x1OffsetDataAoa from '../fixtures/1x1-offset/data-aoa';

import sheet2x2OffsetObject from '../fixtures/2x2-offset/sheet';
import sheet2x2OffsetDataAoa from '../fixtures/2x2-offset/data-aoa';

import sheet5x2Object from '../fixtures/5x2/sheet';
import sheet5x2DataAoa from '../fixtures/5x2/data-aoa';


describe('Iterator', () => {
  let iterator;
  let position;

  it('should set sheet property on initialization', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.sheet).to.equal(sheet1x1Object);
  });

  it('should set position property on initialization as first row index', () => {
    iterator = new Iterator(sheet1x1Object);
    expect(iterator.position).to.equal(sheet1x1Object.firstRow);
  });

  it('should set sheetAoa as array of arrays of sheet data', () => {
    iterator = new Iterator(sheet5x2Object);
    expect(iterator.sheetAoa).to.deep.equal([
      sheet5x2DataAoa[1],
      sheet5x2DataAoa[2],
    ]);
  });

  describe('selectColumns', () => {
    it('should return unique and sorted sequence of numbers', () => {
      expect(Iterator.selectColumns([1, 5, 2, 2, 6])).to.deep.equal([1, 2, 5, 6]);
    });
  });

  describe('getRow', () => {
    describe('1x1', () => {
      beforeEach(() => {
        iterator = new Iterator(sheet1x1Object);
        position = iterator.position;
      });

      it('should return row with index of current iterator position if index argument does not specified', () => {
        const record = iterator.getRow();
        expect(record).to.deep.equal(sheet1x1DataAoa[position]);
      });

      it('should return row with index of current iterator position if index argument equals null', () => {
        const record = iterator.getRow(null);
        expect(record).to.deep.equal(sheet1x1DataAoa[position]);
      });

      it('should return whole row if columns argument does not specified', () => {
        const record = iterator.getRow(position);
        expect(record).to.deep.equal(sheet1x1DataAoa[position]);
      });

      it('should return whole row if columns argument equals null', () => {
        const record = iterator.getRow(position, null);
        expect(record).to.deep.equal(sheet1x1DataAoa[position]);
      });

      it('should return row with specified only columns', () => {
        const columns = [1];
        const record = iterator.getRow(position, columns);
        expect(record).to.deep.equal([
          sheet1x1DataAoa[position][columns[0] - iterator.sheet.firstColumn],
        ]);
      });

      it('should change position if move argument does not specified', () => {
        iterator.getRow(position, null);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should change position if move argument equals true', () => {
        iterator.getRow(position, null, true);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should not change position if move argument equals false', () => {
        iterator.getRow(null, null, false);
        expect(iterator.position).to.deep.equal(position);
      });

      it('should return null if row index lesser than first row index', () => {
        const record = iterator.getRow(iterator.sheet.firstRow - 1, null, false);
        expect(record).to.equal(null);
      });

      it('should return null if row index greater than last row index', () => {
        const record = iterator.getRow(iterator.sheet.lastRow + 1, null, false);
        expect(record).to.equal(null);
      });
    });

    describe('2x2', () => {
      beforeEach(() => {
        iterator = new Iterator(sheet2x2Object);
        position = iterator.position;
      });

      it('should return row with index of current iterator position if index argument does not specified', () => {
        const record = iterator.getRow();
        expect(record).to.deep.equal(sheet2x2DataAoa[position]);
      });

      it('should return row with index of current iterator position if index argument equals null', () => {
        const record = iterator.getRow(null);
        expect(record).to.deep.equal(sheet2x2DataAoa[position]);
      });

      it('should return whole row if columns argument does not specified', () => {
        const record = iterator.getRow(position);
        expect(record).to.deep.equal(sheet2x2DataAoa[position]);
      });

      it('should return whole row if columns argument equals null', () => {
        const record = iterator.getRow(position, null);
        expect(record).to.deep.equal(sheet2x2DataAoa[position]);
      });

      it('should return row with specified only columns', () => {
        const columns = [2];
        const record = iterator.getRow(position, columns);
        expect(record).to.deep.equal([
          sheet2x2DataAoa[position][columns[0] - iterator.sheet.firstColumn],
        ]);
      });

      it('should change position if move argument does not specified', () => {
        iterator.getRow(position, null);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should change position if move argument equals true', () => {
        iterator.getRow(position, null, true);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should not change position if move argument equals false', () => {
        iterator.getRow(null, null, false);
        expect(iterator.position).to.deep.equal(position);
      });

      it('should return null if row index lesser than first row index', () => {
        const record = iterator.getRow(iterator.sheet.firstRow - 1, null, false);
        expect(record).to.equal(null);
      });

      it('should return null if row index greater than last row index', () => {
        const record = iterator.getRow(iterator.sheet.lastRow + 1, null, false);
        expect(record).to.equal(null);
      });
    });

    describe('1x1-offset', () => {
      beforeEach(() => {
        iterator = new Iterator(sheet1x1OffsetObject);
        position = iterator.position;
      });

      it('should return row with index of current iterator position if index argument does not specified', () => {
        const record = iterator.getRow();
        expect(record).to.deep.equal(sheet1x1OffsetDataAoa[position]);
      });

      it('should return row with index of current iterator position if index argument equals null', () => {
        const record = iterator.getRow(null);
        expect(record).to.deep.equal(sheet1x1OffsetDataAoa[position]);
      });

      it('should return whole row if columns argument does not specified', () => {
        const record = iterator.getRow(position);
        expect(record).to.deep.equal(sheet1x1OffsetDataAoa[position]);
      });

      it('should return whole row if columns argument equals null', () => {
        const record = iterator.getRow(position, null);
        expect(record).to.deep.equal(sheet1x1OffsetDataAoa[position]);
      });

      it('should return row with specified only columns', () => {
        const columns = [2];
        const record = iterator.getRow(position, columns);
        expect(record).to.deep.equal([
          sheet1x1OffsetDataAoa[position][columns[0] - iterator.sheet.firstColumn],
        ]);
      });

      it('should change position if move argument does not specified', () => {
        iterator.getRow(position, null);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should change position if move argument equals true', () => {
        iterator.getRow(position, null, true);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should not change position if move argument equals false', () => {
        iterator.getRow(null, null, false);
        expect(iterator.position).to.deep.equal(position);
      });

      it('should return null if row index lesser than first row index', () => {
        const record = iterator.getRow(iterator.sheet.firstRow - 1, null, false);
        expect(record).to.equal(null);
      });

      it('should return null if row index greater than last row index', () => {
        const record = iterator.getRow(iterator.sheet.lastRow + 1, null, false);
        expect(record).to.equal(null);
      });
    });

    describe('2x2-offset', () => {
      beforeEach(() => {
        iterator = new Iterator(sheet2x2OffsetObject);
        position = iterator.position;
      });

      it('should return row with index of current iterator position if index argument does not specified', () => {
        const record = iterator.getRow();
        expect(record).to.deep.equal(sheet2x2OffsetDataAoa[position]);
      });

      it('should return row with index of current iterator position if index argument equals null', () => {
        const record = iterator.getRow(null);
        expect(record).to.deep.equal(sheet2x2OffsetDataAoa[position]);
      });

      it('should return whole row if columns argument does not specified', () => {
        const record = iterator.getRow(position);
        expect(record).to.deep.equal(sheet2x2OffsetDataAoa[position]);
      });

      it('should return whole row if columns argument equals null', () => {
        const record = iterator.getRow(position, null);
        expect(record).to.deep.equal(sheet2x2OffsetDataAoa[position]);
      });

      it('should return row with specified only columns', () => {
        const columns = [4];
        const record = iterator.getRow(position, columns);
        expect(record).to.deep.equal([
          sheet2x2OffsetDataAoa[position][columns[0] - iterator.sheet.firstColumn],
        ]);
      });

      it('should change position if move argument does not specified', () => {
        iterator.getRow(position, null);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should change position if move argument equals true', () => {
        iterator.getRow(position, null, true);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should not change position if move argument equals false', () => {
        iterator.getRow(null, null, false);
        expect(iterator.position).to.deep.equal(position);
      });

      it('should return null if row index lesser than first row index', () => {
        const record = iterator.getRow(iterator.sheet.firstRow - 1, null, false);
        expect(record).to.equal(null);
      });

      it('should return null if row index greater than last row index', () => {
        const record = iterator.getRow(iterator.sheet.lastRow + 1, null, false);
        expect(record).to.equal(null);
      });
    });

    describe('5x2', () => {
      beforeEach(() => {
        iterator = new Iterator(sheet5x2Object);
        position = iterator.position;
      });

      it('should return row with index of current iterator position if index argument does not specified', () => {
        const record = iterator.getRow();
        expect(record).to.deep.equal(sheet5x2DataAoa[position]);
      });

      it('should return row with index of current iterator position if index argument equals null', () => {
        const record = iterator.getRow(null);
        expect(record).to.deep.equal(sheet5x2DataAoa[position]);
      });

      it('should return whole row if columns argument does not specified', () => {
        const record = iterator.getRow(position);
        expect(record).to.deep.equal(sheet5x2DataAoa[position]);
      });

      it('should return whole row if columns argument equals null', () => {
        const record = iterator.getRow(position, null);
        expect(record).to.deep.equal(sheet5x2DataAoa[position]);
      });

      it('should return row with specified only columns', () => {
        const columns = [1, 2, 4];
        const record = iterator.getRow(position, columns);
        expect(record).to.deep.equal([
          sheet5x2DataAoa[position][columns[0] - iterator.sheet.firstColumn],
          sheet5x2DataAoa[position][columns[1] - iterator.sheet.firstColumn],
          sheet5x2DataAoa[position][columns[2] - iterator.sheet.firstColumn],
        ]);
      });

      it('should change position if move argument does not specified', () => {
        iterator.getRow(position, null);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should change position if move argument equals true', () => {
        iterator.getRow(position, null, true);
        expect(iterator.position).to.deep.equal(position + 1);
      });

      it('should not change position if move argument equals false', () => {
        iterator.getRow(null, null, false);
        expect(iterator.position).to.deep.equal(position);
      });

      it('should return null if row index lesser than first row index', () => {
        const record = iterator.getRow(iterator.sheet.firstRow - 1, null, false);
        expect(record).to.equal(null);
      });

      it('should return null if row index greater than last row index', () => {
        const record = iterator.getRow(iterator.sheet.lastRow + 1, null, false);
        expect(record).to.equal(null);
      });
    });
  });
});
