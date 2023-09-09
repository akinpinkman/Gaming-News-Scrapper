const feedDisplay = document.querySelector('#feed');

function fetchAndDisplayNews(sourceURL) {
    fetch(sourceURL)
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const newsList = `
            <div>
              <a href="${article.url}" target="_blank">
                <h3>${article.title}</h3>
                <img src="${article.img}" alt="${article.title}">
              </a>
            </div>`;
          
          
            feedDisplay.insertAdjacentHTML('beforeend', newsList);
        });
    })
    .catch(err => console.log(err));
}

fetchAndDisplayNews('https://gaming-news-scrapper-server.onrender.com/gamespotnews');
fetchAndDisplayNews('https://gaming-news-scrapper-server.onrender.com/gameinformernews');
