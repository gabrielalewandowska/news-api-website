var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c1dfa50772f4408d807c78e96424cd2d"
var latestArticlesArray;

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var articleObject = JSON.parse( this.responseText );
    latestArticlesArray = articleObject.articles;
    render(latestArticlesArray);
    console.log(latestArticlesArray);
  })
  request.send()
}

var render = function(articleArray){
  var newsContainer = document.getElementById("latest-news-container");
  for(var article of articleArray){
    var photo = document.createElement("img");
    photo.src = article.urlToImage;
    newsContainer.appendChild(photo);

    var headline = document.createElement("h3");
    headline.innerText = article.title;
    newsContainer.appendChild(headline);

    var lead = document.createElement("p");
    lead.innerText = article.description;
    newsContainer.appendChild(lead);

    var link = document.createElement("a");
    link.href = article.url;
    link.innerText = "Click here to read more";
    newsContainer.appendChild(link);
  }
}



var initialize = function(){
  makeRequest(url);
}

window.addEventListener("load", initialize);
