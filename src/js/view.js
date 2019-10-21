class View {
  renderNewsList(news) {
    const newsList = document.querySelector('.newsList');

    news.forEach((article) => {
      const listItem = document.createElement('li');
      const parsedDate = new Date(article.webPublicationDate).toLocaleDateString('pl-PL');

      listItem.innerHTML = `
        <article class="news">
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
            <button class="button button-outline">Read Later</button>
          </section>
        </article>
      `;

      newsList.appendChild(listItem);
    });
  }
}

export default View;
