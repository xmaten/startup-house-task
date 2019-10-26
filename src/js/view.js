class View {
  renderNewsList(news) {
    const newsList = document.querySelector('.newsList');
    newsList.innerHTML = '';
    news.forEach((article) => {
      const listItem = document.createElement('li');
      const parsedDate = new Date(
        article.webPublicationDate,
      ).toLocaleDateString('pl-PL');
      const template = `
        <article class="news" data-id="${article.id}">
          <header>
            <h3>${article.webTitle}</h3>
          </header>
          <section class="newsDetails">
            <ul>
              <li><strong>Section Name:</strong> ${article.sectionName}</li>
              <li><strong>Publication Date:</strong> ${parsedDate}</li>
            </ul>
          </section>
          <section class="newsActions">
            <a href="${article.webUrl}" target="_blank" rel="noopener" class="button">Full article</a>
            <button class="button button-outline js-addToReadLater">Read Later</button>
          </section>
        </article>
      `;

      listItem.insertAdjacentHTML('beforeend', template);
      newsList.appendChild(listItem);
    });
  }

  bindHandleAddReadLater(callback) {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-addToReadLater')) {
        const clickedEl = e.target;
        const newsId = clickedEl.parentNode.parentNode.getAttribute('data-id');

        callback(newsId);
      }
    });
  }

  bindHandleRemoveReadLater(callback) {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-removeFromReadLater')) {
        const clickedEl = e.target;
        const newsId = clickedEl.parentNode.getAttribute('data-id');

        callback(newsId);
      }
    });
  }

  renderReadLaterList(news) {
    const readLaterList = document.querySelector('.readLaterList');
    readLaterList.innerHTML = '';

    news.forEach((n) => {
      const listItem = document.createElement('li');
      const template = `
        <h4 class="readLaterItem-title">${n.webTitle}</h4>
        <section data-id="${n.id}">
          <a href="${n.webUrl}" target="_blank" rel="noopener" class="button button-clear">Read</a>
          <button class="button button-clear js-removeFromReadLater">Remove</button>
        </section>
      `;

      listItem.insertAdjacentHTML('beforeend', template);
      readLaterList.appendChild(listItem);
    });
  }

  bindHandleSearch(callback) {
    const input = document.getElementById('newsContentSearch');

    input.addEventListener('input', (e) => {
      const { value } = e.target;

      callback(value);
    });
  }

  bindHandlerFilterSection(callback) {
    const selectEl = document.getElementById('sectionSelect');

    selectEl.addEventListener('change', (e) => {
      callback(e.target.value);
    });
  }

  renderPagination(pages) {
    const pagesSelect = document.getElementById('activePageSelect');

    for (let i = 2; i <= pages; i += 1) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;

      pagesSelect.appendChild(option);
    }
  }

  bindPaginationChange(callback) {
    const pagesSelect = document.getElementById('activePageSelect');
    pagesSelect.addEventListener('change', () => {
      const searchInput = document.getElementById('newsContentSearch').value;
      const selectedPage = pagesSelect.options[pagesSelect.selectedIndex].value;
      callback(selectedPage, searchInput);
    });
  }

  renderError() {
    const newsList = document.querySelector('.newsList');
    const errorContainer = document.createElement('p');
    const errorMessage = 'Sorry, there was an error while downloading news. Please try again later';
    errorContainer.insertAdjacentHTML('beforeend', errorMessage);

    newsList.appendChild(errorContainer);
  }

  handlerLoader(isLoading) {
    const loader = document.querySelector('.js-loader');
    if (isLoading) {
      loader.classList.add('active');
    } else {
      loader.classList.remove('active');
    }
  }
}

export default View;
