import { expect } from 'chai';

import Sheet from 'Src/sheet';
import Iterator from 'Src/iterator';

import sheet1x1 from '../fixtures/1x1/data';
import sheet1x1Object from '../fixtures/1x1/sheet';

import sheet2x2 from '../fixtures/2x2/data';
import sheet2x2Object from '../fixtures/2x2/sheet';

import sheet1x1Offset from '../fixtures/1x1-offset/data';
import sheet1x1OffsetObject from '../fixtures/1x1-offset/sheet';

import sheet2x2Offset from '../fixtures/2x2-offset/data';
import sheet2x2OffsetObject from '../fixtures/2x2-offset/sheet';

import sheet5x2 from '../fixtures/5x2/data';
import sheet5x2Object from '../fixtures/5x2/sheet';
import sheet5x2DataAoa from '../fixtures/5x2/data-aoa';


describe('Sheet', () => {
  let sheet;

  it('should have data property', () => {
    sheet = new Sheet(sheet1x1);
    expect(sheet).to.have.property('data');
  });

  it('should have name property', () => {
    sheet = new Sheet(sheet1x1);
    expect(sheet).to.have.property('name');
  });

  it('should set data property on initialization', () => {
    sheet = new Sheet(sheet1x1);
    expect(sheet.data).to.equal(sheet1x1);
  });

  it('should set name property on initialization', () => {
    const name = 'defaultName';
    sheet = new Sheet(sheet1x1, name);
    expect(sheet.name).to.equal(name);
  });

  it('should set aoa as array of arrays of sheet data', () => {
    sheet = new Sheet(sheet5x2);
    expect(sheet.aoa).to.deep.equal([
      sheet5x2DataAoa[1],
      sheet5x2DataAoa[2],
    ]);
  });

  it('should throw an Error if data property was not given to constructor', () => {
    expect(() => new Sheet()).to.throw(Error);
  });

  describe('isEmpty', () => {
    it('should return true if !ref is not defined', () => {
      sheet = new Sheet({});
      expect(sheet.isEmpty()).to.equal(true);
    });

    it('should return false if !ref is defined', () => {
      sheet = new Sheet(sheet1x1);
      expect(sheet.isEmpty()).to.equal(false);
    });
  });

  describe('calculateSheetProperties', () => {
    beforeEach(() => {
      sheet = new Sheet(sheet1x1);
    });

    describe('1x1', () => {
      it('should calculate and set width property', () => {
        expect(sheet.width).to.equal(sheet1x1Object.width);
      });

      it('should calculate and set height property', () => {
        expect(sheet.height).to.equal(sheet1x1Object.height);
      });

      it('should set first column index', () => {
        expect(sheet.firstColumn).to.equal(sheet1x1Object.firstColumn);
      });

      it('should set first row index', () => {
        expect(sheet.firstRow).to.equal(sheet1x1Object.firstRow);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet1x1Object.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.lastRow).to.equal(sheet1x1Object.lastRow);
      });
    });

    describe('2x2', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet2x2);
      });

      it('should calculate and set width property', () => {
        expect(sheet.width).to.equal(sheet2x2Object.width);
      });

      it('should calculate and set height property', () => {
        expect(sheet.height).to.equal(sheet2x2Object.height);
      });

      it('should set first column index', () => {
        expect(sheet.firstColumn).to.equal(sheet2x2Object.firstColumn);
      });

      it('should set first row index', () => {
        expect(sheet.firstRow).to.equal(sheet2x2Object.firstRow);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet2x2Object.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.lastRow).to.equal(sheet2x2Object.lastRow);
      });
    });

    describe('1x1 with offset', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet1x1Offset);
      });

      it('should calculate and set width property', () => {
        expect(sheet.width).to.equal(sheet1x1OffsetObject.width);
      });

      it('should calculate and set height property', () => {
        expect(sheet.height).to.equal(sheet1x1OffsetObject.height);
      });

      it('should set first column index', () => {
        expect(sheet.firstColumn).to.equal(sheet1x1OffsetObject.firstColumn);
      });

      it('should set first row index', () => {
        expect(sheet.firstRow).to.equal(sheet1x1OffsetObject.firstRow);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet1x1OffsetObject.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.lastRow).to.equal(sheet1x1OffsetObject.lastRow);
      });
    });

    describe('2x2 with offset', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet2x2Offset);
      });

      it('should calculate and set width property', () => {
        expect(sheet.width).to.equal(sheet2x2OffsetObject.width);
      });

      it('should calculate and set height property', () => {
        expect(sheet.height).to.equal(sheet2x2OffsetObject.height);
      });

      it('should set first column index', () => {
        expect(sheet.firstColumn).to.equal(sheet2x2OffsetObject.firstColumn);
      });

      it('should set first row index', () => {
        expect(sheet.firstRow).to.equal(sheet2x2OffsetObject.firstRow);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet2x2OffsetObject.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.lastRow).to.equal(sheet2x2OffsetObject.lastRow);
      });
    });

    describe('5x2', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet5x2);
      });

      it('should calculate and set width property', () => {
        expect(sheet.width).to.equal(sheet5x2Object.width);
      });

      it('should calculate and set height property', () => {
        expect(sheet.height).to.equal(sheet5x2Object.height);
      });

      it('should set first column index', () => {
        expect(sheet.firstColumn).to.equal(sheet5x2Object.firstColumn);
      });

      it('should set first row index', () => {
        expect(sheet.firstRow).to.equal(sheet5x2Object.firstRow);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet5x2Object.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.lastRow).to.equal(sheet5x2Object.lastRow);
      });
    });
  });

  describe('getIterator', () => {
    it('should return an iterator for the sheet object', () => {
      sheet = new Sheet(sheet2x2Offset);
      expect(sheet.getIterator()).to.be.an.instanceof(Iterator);
    });

    it('should throw an error if sheet is empty', () => {
      sheet = new Sheet({});
      expect(() => sheet.getIterator()).to.throw(Error);
    });
  });
});
