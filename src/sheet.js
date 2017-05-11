
export default class Sheet {
  constructor(data, name = null) {
    if (!data) throw Error('data argument is required');
    this.data = data;
    this.name = name;
  }
}
