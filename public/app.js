var init = function() {

  var quoteButton = document.getElementById("quote-button");

  quoteButton.onclick = function(){

    var quote = document.getElementById("quote-text-input").value;
    var name = document.getElementById("quote-name-input").value;
    console.log(quote, name);
    newQuote(quote, name);

  }

  var quoteEntry = function(quote, name) {
    var setQuote = new Quote(quote, name)
    var newQuote = document.createElement("blockquote");
    var newName = document.createElement("cite");

    newQuote.setAttribute('class', "quote");
    newQuote.innerText = (newQuote.name + ' ');
    newName.innerText = setQuote.name;

    quoteList = document.getElementById("regular");
    quoteList.appendChild(newQuote);
    newQuote.appendChild(newName);

  }

  var palette = function() {

    console.log('hot')

    var allNormalQuotes = document.getElementsByClassName("quote")

    for(var i = 0; i < allNormalQuotes.length; i++) {
      if((i+1) % 2 === 0){
        allNormalQuotes[i].style.backgroundColor = "wheat";
        allNormalQuotes[i].style.color = "tomato";
      }
      else{
        allNormalQuotes[i].style.backgroundColor = "tomato";
        allNormalQuotes[i].style.color = "wheat";
      }
    }

    var allFeaturedQuotes = document.getElementsByClassName("featured");

    for(var i = 0; i < allFeaturedQuotes.length; i++) {
      if((i+1) % 2 === 0){
        allFeaturedQuotes[i].style.backgroundColor = "beige";
        allFeaturedQuotes[i].style.color = "green";
      }
      else{
        allFeaturedQuotes[i].style.backgroundColor = "black";
        allFeaturedQuotes[i].style.color = "white";
      }
    }
  }

  var Quote = function(quote, name) {
    this.quote = quote;
    this.name = name;
  }

  var quote1 = new Quote('Visual Basic is the way forward, I do not know why we are doing Javascript.', 'Jay');
  var quote2 = new Quote('The only CSS you need to know is background-color: tomato', 'Rick');
  var quote3 = new Quote('No blockers *smug tone*', 'Keith');
  var quote4 = new Quote('Scaffold is nothing but a fiery hell.', 'Val');

  quoteArray = [quote1, quote2, quote3, quote4];

  var displayQuotes = function(quoteArray) {

    var regularQuotes = document.getElementById('regular');
    refreshContainer(regularQuotes);
    for (var i = quoteArray.length - 1; i >= 0; i--) {

      var article = document.createElement('article');
      var text = document.createElement('blockquote');
      var cite = document.createElement('cite');
      var quote = quoteArray[i]['quote'];
      var name = quoteArray[i]['name'];
      text.innerText = ("''" + quote + "''");
      cite.innerText = (" - " + name);

     
     article.setAttribute('class', "quote");
     regularQuotes.appendChild(article);
     article.appendChild(text);
     text.appendChild(cite);

    };

    palette();
  }

  var refreshContainer = function (element){
    for (var i = element.children.length - 1; i >= 0; i--) {
      element.removeChild(element.children[i]);
    };
  }

  var newQuote = function(quote, name){
    addedQuote = new Quote(quote, name);
    quoteArray.push(addedQuote);
    displayQuotes(quoteArray);
  }

  palette();
  displayQuotes(quoteArray);

};




window.onload = init;
