import utils from 'csf-utils';

import Iterator from 'Src/iterator';


export default class Sheet {
  constructor(data, name = null) {
    if (!data) throw Error('data argument is required');
    this.data = data;
    this.aoa = utils.convert.sheetToAoa(this.data);
    this.name = name;

    this.width = null;
    this.height = null;
    this.firstColumn = null;
    this.firstRow = null;
    this.lastColumn = null;
    this.lastRow = null;

    this.calculateSheetProperties();
  }

  calculateSheetProperties() {
    if (!this.isEmpty()) {
      const split = this.data['!ref'].split(':');

      const firstCell = utils.parseCell(split[0]);
      const lastCell = split[1] ? utils.parseCell(split[1]) : firstCell;

      this.firstColumn = firstCell.column;
      this.firstRow = firstCell.row;

      this.lastColumn = lastCell.column;
      this.lastRow = lastCell.row;

      this.width = (this.lastColumn - this.firstColumn) + 1;
      this.height = (this.lastRow - this.firstRow) + 1;
    }
  }

  isEmpty() {
    return !this.data['!ref'];
  }

  getIterator() {
    if (!this.isEmpty()) return new Iterator(this);
    throw new Error('Sheet is empty');
  }
}
