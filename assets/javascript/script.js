var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=sbE1BwK0d8aQRcAjp2Z7iBJcAcMbowAAcJdascck&count=5', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    displayNews(response);
  }
  else {
    console.log('Haberler alinamadi. Hata kodu: ' + xhr.status);
  }
};
xhr.send();

function displayNews(newsData) {
  var newsSection = document.getElementById('newsSection');

  // Her bir haber için döngü oluşturalım
  for (var i = 0; i < newsData.length; i++) {
    var article = document.createElement('article');
    var title = document.createElement('h3');
    var date = document.createElement('p');
    var image = document.createElement('img');
    var explanation = document.createElement('p');

    title.textContent = newsData[i].title;
    date.textContent = formatDate(newsData[i].date);
    image.src = newsData[i].url;
    explanation.textContent = newsData[i].explanation;

    article.appendChild(title);
    article.appendChild(date);
    article.appendChild(image);
    article.appendChild(explanation);

    newsSection.appendChild(article);
  }
}

function formatDate(dateString) {
  var date = new Date(dateString);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

