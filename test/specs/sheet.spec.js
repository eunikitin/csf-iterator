import { expect } from 'chai';

import Sheet from 'Src/sheet';

import sheet1x1 from 'Test/fixtures/sheet-1x1';


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

  it('should throw an Error if data property was not given to constructor', () => {
    expect(() => new Sheet()).to.throw(Error);
  });
});
