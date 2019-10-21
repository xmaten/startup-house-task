class View {
  renderNewsList(news) {
    const newsList = document.querySelector('.newsList');

    news.forEach((article) => {
      const listItem = document.createElement('li');
      const parsedDate = new Date(article.webPublicationDate).toLocaleDateString('pl-PL');

      listItem.innerHTML = `
        <article class="news" id="${article.id}">
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

      newsList.appendChild(listItem);
    });
  }

  bindHandleAddReadLater(callback) {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-addToReadLater')) {
        const clickedEl = e.target;
        const newsId = clickedEl.parentNode.parentNode.id;

        callback(newsId);
      }
    });
  }

  renderReadLaterList(news) {
    const readLaterList = document.querySelector('.readLaterList');
    readLaterList.innerHTML = '';

    news.forEach((n) => {
      const listItem = document.createElement('li');

      listItem.innerHTML = `
        <h4 class="readLaterItem-title">${n.webTitle}</h4>
        <section>
          <a href="${n.webUrl}" target="_blank" rel="noopener" class="button button-clear">Read</a>
          <button class="button button-clear">Remove</button>
        </section>
      `;

      readLaterList.appendChild(listItem);
    });
  }
}

export default View;
