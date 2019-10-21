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
    this.readLater.push(news);

    return this.readLater;
  }
}

export default Model;
