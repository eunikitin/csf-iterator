import utils from 'csf-utils';

import Iterator from 'Src/iterator';


export default class Sheet {
  constructor(data, name = null) {
    if (!data) throw Error('data argument is required');
    this.data = data;
    this.aoa = null;
    this.name = name;

    this.content = {
      width: null,
      height: null,
    };

    this.first = {
      column: null,
      row: null,
    };

    this.last = {
      column: null,
      row: null,
    };

    this.calculateSheetProperties();
  }

  calculateSheetProperties() {
    if (!this.isEmpty()) {
      const split = this.data['!ref'].split(':');

      this.aoa = utils.convert.sheetToAoa(this.data);
      const firstCell = utils.parseCell(split[0]);
      const lastCell = split[1] ? utils.parseCell(split[1]) : firstCell;

      this.first.column = firstCell.column;
      this.first.row = firstCell.row;

      this.last.column = lastCell.column;
      this.last.row = lastCell.row;

      this.content.width = (this.last.column - this.first.column) + 1;
      this.content.height = (this.last.row - this.first.row) + 1;
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
