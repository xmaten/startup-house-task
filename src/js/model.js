class Model {
  constructor(data) {
    this.data = data;
    this.readLater = [];
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }

  addToReadLater(news) {
    if (!this.readLater.includes(news)) {
      this.readLater = [...this.readLater, news];
    }

    return this.readLater;
  }

  removeFromReadLater(news) {
    const filtered = this.readLater.filter(item => item.id !== news.id);

    this.readLater = filtered;

    return this.readLater;
  }

  getSearchItem(value) {
    const foundItems = this.data.filter(item => item.webTitle.toLowerCase()
      .includes(value.toLowerCase()));

    return foundItems;
  }
}

export default Model;
