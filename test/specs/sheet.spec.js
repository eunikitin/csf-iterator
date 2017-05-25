import { expect } from 'chai';

import Sheet from 'Src/sheet';
import Iterator from 'Src/iterator';

import sheet1x1 from '../fixtures/sheet-1x1';
import sheet1x1Props from '../fixtures/sheet-1x1-props';

import sheet2x2 from '../fixtures/sheet-2x2';
import sheet2x2Props from '../fixtures/sheet-2x2-props';

import sheet1x1Offset from '../fixtures/sheet-1x1-offset';
import sheet1x1OffsetProps from '../fixtures/sheet-1x1-offset-props';

import sheet2x2Offset from '../fixtures/sheet-2x2-offset';
import sheet2x2OffsetProps from '../fixtures/sheet-2x2-offset-props';


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
    describe('1x1', () => {
      it('should calculate and set width property', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.width).to.equal(sheet1x1Props.width);
      });

      it('should calculate and set height property', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.height).to.equal(sheet1x1Props.height);
      });

      it('should set first column index', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.firstColumn).to.equal(sheet1x1Props.first.column);
      });

      it('should set first row index', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.firstRow).to.equal(sheet1x1Props.first.row);
      });

      it('should set last column index', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.lastColumn).to.equal(sheet1x1Props.last.column);
      });

      it('should set last row index', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.lastRow).to.equal(sheet1x1Props.last.row);
      });
    });

    describe('2x2', () => {
      it('should calculate and set width property', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.width).to.equal(sheet2x2Props.width);
      });

      it('should calculate and set height property', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.height).to.equal(sheet2x2Props.height);
      });

      it('should set first column index', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.firstColumn).to.equal(sheet2x2Props.first.column);
      });

      it('should set first row index', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.firstRow).to.equal(sheet2x2Props.first.row);
      });

      it('should set last column index', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.lastColumn).to.equal(sheet2x2Props.last.column);
      });

      it('should set last row index', () => {
        sheet = new Sheet(sheet2x2);
        expect(sheet.lastRow).to.equal(sheet2x2Props.last.row);
      });
    });

    describe('1x1 with offset', () => {
      it('should calculate and set width property', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.width).to.equal(sheet1x1OffsetProps.width);
      });

      it('should calculate and set height property', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.height).to.equal(sheet1x1OffsetProps.height);
      });

      it('should set first column index', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.firstColumn).to.equal(sheet1x1OffsetProps.first.column);
      });

      it('should set first row index', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.firstRow).to.equal(sheet1x1OffsetProps.first.row);
      });

      it('should set last column index', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.lastColumn).to.equal(sheet1x1OffsetProps.last.column);
      });

      it('should set last row index', () => {
        sheet = new Sheet(sheet1x1Offset);
        expect(sheet.lastRow).to.equal(sheet1x1OffsetProps.last.row);
      });
    });

    describe('2x2 with offset', () => {
      it('should calculate and set width property', () => {
        sheet = new Sheet(sheet2x2Offset);
        expect(sheet.width).to.equal(sheet2x2OffsetProps.width);
      });

      it('should calculate and set height property', () => {
        sheet = new Sheet(sheet2x2Offset);
        expect(sheet.height).to.equal(sheet2x2OffsetProps.height);
      });

      it('should set first column index', () => {
        sheet = new Sheet(sheet2x2Offset);
        expect(sheet.firstColumn).to.equal(sheet2x2OffsetProps.first.column);
      });

      it('should set first row index', () => {
        sheet = new Sheet(sheet1x1);
        expect(sheet.firstRow).to.equal(sheet1x1Props.first.row);
      });

      it('should set last column index', () => {
        sheet = new Sheet(sheet2x2Offset);
        expect(sheet.lastColumn).to.equal(sheet2x2OffsetProps.last.column);
      });

      it('should set last row index', () => {
        sheet = new Sheet(sheet2x2Offset);
        expect(sheet.lastRow).to.equal(sheet2x2OffsetProps.last.row);
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
