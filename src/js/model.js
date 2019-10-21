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
}

export default Model;
