class Model {
  constructor(data) {
    this.data = data;
    this.readLater = [];
    this.page = 1;
    this.pages = 1;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }

  setPages(pagesNumber) {
    this.pages = pagesNumber;
  }

  getPages() {
    return this.pages;
  }

  addToReadLater(news) {
    if (this.readLater.filter(item => item.id === news.id).length === 0) {
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

  filterBySection(section) {
    let filteredItems = this.data.filter(item => item.sectionName.toLowerCase()
    === section.toLowerCase());

    if (section === 'all') {
      filteredItems = this.data;
    }

    return filteredItems;
  }
}

export default Model;
