import utils from 'csf-utils';


export default class Iterator {
  constructor(sheet) {
    this.sheet = sheet;
    this.position = sheet.firstRow;
  }

  static selectColumns(columns) {
    return columns.sort((a, b) => a - b)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  getRow(index, columns, move = true) {
    const row = (index === undefined || index === null) ? this.position : index;

    if (this.sheet.firstRow > row || row > this.sheet.lastRow) return null;

    const self = this;

    const columnList = columns ? Iterator.selectColumns(columns)
      : Iterator.selectColumns(
        Array(null, ...{ length: self.sheet.width - 1 }) // eslint-disable-line no-array-constructor
          .map((arg1, columnIndex) => self.sheet.lastColumn - columnIndex, Number),
      );

    const record = [];

    columnList.forEach((column) => {
      record.push(this.sheet.aoa[self.sheet.lastRow - row][self.sheet.lastColumn - column]);
    });

    if (move) this.position += 1;

    return record;
  }
}
