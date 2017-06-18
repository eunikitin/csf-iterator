
export default function (index, row) {
  if (!(row instanceof Array)) throw new Error('Row expected to be an array');
  const i = index || 1;
  this.sheet.aoa.splice(i - 1, 0, row);
  this.position.row += 1;
  this.sheet.calculateSheetProperties();
}
