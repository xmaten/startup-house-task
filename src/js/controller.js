import getMonthAgo from './helpers/getMonthAgo';
import apiKey from './helpers/constants';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  fetchNews() {
    const monthAgo = getMonthAgo();

    fetch(`https://content.guardianapis.com/search?from-date=${monthAgo}&api-key=${apiKey}&page-size=50`)
      .then(response => response.json())
      .then((data) => {
        this.model.setData(data.response.results);
        this.setView();
      });
  }

  setView() {
    const data = this.model.getData();

    this.view.renderNewsList(data);
  }
}

export default Controller;
