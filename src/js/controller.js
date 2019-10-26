import getMonthAgo from './helpers/getMonthAgo';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.bindHandleAddReadLater(this.handleAddReadLater.bind(this));
    view.bindHandleRemoveReadLater(this.handleRemoveReadLater.bind(this));
    view.bindHandleSearch(this.handleSearch.bind(this));
    view.bindHandlerFilterSection(this.handleFilterBySection.bind(this));
    view.bindPaginationChange(this.handlePageChange.bind(this));
  }

  async fetchNews(page = 1, searchParam = '', section = '') {
    const monthAgo = getMonthAgo();
    const apiKey = process.env.API_KEY;
    this.startLoader();

    let endpoint = `https://content.guardianapis.com/search?from-date=${monthAgo}&order-by=newest&page=${page}&api-key=${apiKey}&page-size=10`;

    if (searchParam !== '' && searchParam !== '') {
      endpoint = `https://content.guardianapis.com/search?q=${searchParam}&order-by=newest&page=${page}&api-key=${apiKey}&page-size=10`;
    }

    if (section !== 'all' && section !== '') {
      endpoint = `https://content.guardianapis.com/search?section=${section}&order-by=newest&page=${page}&api-key=${apiKey}&page-size=10`;
    }

    try {
      const request = await fetch(endpoint);
      const data = await request.json();

      this.model.setPages(data.response.pages);
      this.model.setData(data.response.results);
      this.setView();
      this.clearLoader();
    } catch (err) {
      this.handleError();
      this.clearLoader();
    }
  }

  setView() {
    const data = this.model.getData();
    const pages = this.model.getPages();

    this.view.renderNewsList(data);
    this.view.renderPagination(pages);
  }

  startLoader() {
    this.view.handlerLoader(true);
  }

  clearLoader() {
    this.view.handlerLoader(false);
  }

  handleError() {
    this.view.renderError();
  }

  handleAddReadLater(newsId) {
    const data = this.model.getData();
    const chosenNews = data.filter(n => n.id === newsId);

    const newReadLaterList = this.model.addToReadLater(...chosenNews);

    this.view.renderReadLaterList(newReadLaterList);
    localStorage.setItem('readLater', JSON.stringify(newReadLaterList));
  }

  restoreReadLaterList() {
    if (localStorage.getItem('readLater')) {
      const readLater = JSON.parse(localStorage.getItem('readLater'));
      readLater.forEach(item => this.model.addToReadLater(item));
      this.view.renderReadLaterList(readLater);
    }
  }

  handleRemoveReadLater(newsId) {
    const data = this.model.getReadLater();
    const chosenNews = data.filter(n => n.id === newsId);

    const newReadLaterList = this.model.removeFromReadLater(...chosenNews);
    this.view.renderReadLaterList(newReadLaterList);

    localStorage.removeItem('readLater');
    localStorage.setItem('readLater', JSON.stringify(newReadLaterList));
  }

  handleSearch(value) {
    const page = 1;
    const searchValue = value;
    const section = '';

    this.fetchNews(page, searchValue, section);
    const searched = this.model.getSearchItem(value);

    this.view.renderNewsList(searched);
  }

  handleFilterBySection(value) {
    const page = 1;
    const searchValue = '';
    const section = value;

    this.fetchNews(page, searchValue, section);
    const filteredBySection = this.model.filterBySection(value);

    this.view.renderNewsList(filteredBySection);
  }

  handlePageChange(page, searchValue, section) {
    this.fetchNews(page, searchValue, section);
  }
}

export default Controller;
