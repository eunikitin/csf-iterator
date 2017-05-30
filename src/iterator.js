
export default class Iterator {
  constructor(sheet) {
    this.sheet = sheet;
    this.position = sheet.firstRow;
  }
}
