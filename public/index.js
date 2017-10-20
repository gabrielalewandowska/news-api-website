var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c1dfa50772f4408d807c78e96424cd2d"
var latestArticlesArray;

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var articleObject = JSON.parse( this.responseText );
    latestArticlesArray = articleObject.articles;
    console.log(latestArticlesArray);
  })
  request.send()
}

var render = function(articleArray){
  for(var article of)
}



var initialize = function(){
  makeRequest(url);
}

window.addEventListener("load", initialize);
