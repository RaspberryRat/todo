class Project {
  constructor(title = 'Default') {
    this.title = title;
    this._items = [];
  }

  get items() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }
}



export default Project;
