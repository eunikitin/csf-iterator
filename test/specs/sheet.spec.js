import { assert, expect } from 'chai';
import sinon from 'sinon';

import Sheet from 'Src/sheet';
import Iterator from 'Src/iterator';

import sheet1x1 from '../fixtures/1x1/data';
import sheet1x1Object from '../fixtures/1x1/sheet';
import sheet1x1DataAoa from '../fixtures/1x1/data-aoa';

import sheet2x2 from '../fixtures/2x2/data';
import sheet2x2Object from '../fixtures/2x2/sheet';
import sheet2x2DataAoa from '../fixtures/2x2/data-aoa';

import sheet1x1Offset from '../fixtures/1x1-offset/data';
import sheet1x1OffsetObject from '../fixtures/1x1-offset/sheet';
import sheet1x1OffsetDataAoa from '../fixtures/1x1-offset/data-aoa';

import sheet2x2Offset from '../fixtures/2x2-offset/data';
import sheet2x2OffsetObject from '../fixtures/2x2-offset/sheet';
import sheet2x2OffsetDataAoa from '../fixtures/2x2-offset/data-aoa';

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

  it('should call this.calculateSheetProperties on initialization', () => {
    const calculateSheetProperties = sinon.spy(Sheet.prototype, 'calculateSheetProperties');
    sheet = new Sheet(sheet1x1);
    assert(calculateSheetProperties.called);
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
      it('should calculate and set content width property', () => {
        expect(sheet.content.width).to.equal(sheet1x1Object.content.width);
      });

      it('should calculate and set content height property', () => {
        expect(sheet.content.height).to.equal(sheet1x1Object.content.height);
      });

      it('should set first column index', () => {
        expect(sheet.first.column).to.equal(sheet1x1Object.first.column);
      });

      it('should set first row index', () => {
        expect(sheet.first.row).to.equal(sheet1x1Object.first.row);
      });

      it('should set last column index', () => {
        expect(sheet.last.column).to.equal(sheet1x1Object.last.column);
      });

      it('should set last row index', () => {
        expect(sheet.last.row).to.equal(sheet1x1Object.last.row);
      });

      it('should set aoa as array of arrays of sheet data', () => {
        expect(sheet.aoa).to.deep.equal(sheet1x1DataAoa);
      });
    });

    describe('2x2', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet2x2);
      });

      it('should calculate and set content width property', () => {
        expect(sheet.content.width).to.equal(sheet2x2Object.content.width);
      });

      it('should calculate and set content height property', () => {
        expect(sheet.content.height).to.equal(sheet2x2Object.content.height);
      });

      it('should set first column index', () => {
        expect(sheet.first.column).to.equal(sheet2x2Object.first.column);
      });

      it('should set first row index', () => {
        expect(sheet.first.row).to.equal(sheet2x2Object.first.row);
      });

      it('should set last column index', () => {
        expect(sheet.last.column).to.equal(sheet2x2Object.last.column);
      });

      it('should set last row index', () => {
        expect(sheet.last.row).to.equal(sheet2x2Object.last.row);
      });

      it('should set aoa as array of arrays of sheet data', () => {
        expect(sheet.aoa).to.deep.equal(sheet2x2DataAoa);
      });
    });

    describe('5x2', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet5x2);
      });

      it('should calculate and set content width property', () => {
        expect(sheet.content.width).to.equal(sheet5x2Object.content.width);
      });

      it('should calculate and set content height property', () => {
        expect(sheet.content.height).to.equal(sheet5x2Object.content.height);
      });

      it('should set first column index', () => {
        expect(sheet.first.column).to.equal(sheet5x2Object.first.column);
      });

      it('should set first row index', () => {
        expect(sheet.first.row).to.equal(sheet5x2Object.first.row);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet5x2Object.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.last.row).to.equal(sheet5x2Object.last.row);
      });

      it('should set aoa as array of arrays of sheet data', () => {
        expect(sheet.aoa).to.deep.equal(sheet5x2DataAoa);
      });
    });

    describe('1x1 with offset', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet1x1Offset);
      });

      it('should calculate and set content width property', () => {
        expect(sheet.content.width).to.equal(sheet1x1OffsetObject.content.width);
      });

      it('should calculate and set content height property', () => {
        expect(sheet.content.height).to.equal(sheet1x1OffsetObject.content.height);
      });

      it('should set first column index', () => {
        expect(sheet.first.column).to.equal(sheet1x1OffsetObject.first.column);
      });

      it('should set first row index', () => {
        expect(sheet.first.row).to.equal(sheet1x1OffsetObject.first.row);
      });

      it('should set last column index', () => {
        expect(sheet.lastColumn).to.equal(sheet1x1OffsetObject.lastColumn);
      });

      it('should set last row index', () => {
        expect(sheet.last.row).to.equal(sheet1x1OffsetObject.last.row);
      });

      it('should set aoa as array of arrays of sheet data', () => {
        expect(sheet.aoa).to.deep.equal(sheet1x1OffsetDataAoa);
      });
    });

    describe('2x2 with offset', () => {
      beforeEach(() => {
        sheet = new Sheet(sheet2x2Offset);
      });

      it('should calculate and set content width property', () => {
        expect(sheet.content.width).to.equal(sheet2x2OffsetObject.content.width);
      });

      it('should calculate and set content height property', () => {
        expect(sheet.content.height).to.equal(sheet2x2OffsetObject.content.height);
      });

      it('should set first column index', () => {
        expect(sheet.first.column).to.equal(sheet2x2OffsetObject.first.column);
      });

      it('should set first row index', () => {
        expect(sheet.first.row).to.equal(sheet2x2OffsetObject.first.row);
      });

      it('should set last column index', () => {
        expect(sheet.last.column).to.equal(sheet2x2OffsetObject.last.column);
      });

      it('should set last row index', () => {
        expect(sheet.last.row).to.equal(sheet2x2OffsetObject.last.row);
      });

      it('should set aoa as array of arrays of sheet data', () => {
        expect(sheet.aoa).to.deep.equal(sheet2x2OffsetDataAoa);
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
