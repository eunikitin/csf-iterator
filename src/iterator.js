
export default class Iterator {
  constructor(sheet) {
    this.sheet = sheet;
    this.position = sheet.first.row;
  }

  static selectColumns(columns) {
    return columns.sort((a, b) => a - b)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
}
