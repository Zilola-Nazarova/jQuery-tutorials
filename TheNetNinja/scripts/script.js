$(document).ready(function() {
  const allQuotes = $("blockquote");
  let currentQuote = 0;

  function changeQuote() {
    $(allQuotes[currentQuote]).fadeOut(200, function() {
      if(currentQuote == allQuotes.length - 1) {
        currentQuote = 0;
      } else {
        currentQuote++;
      }
      $(allQuotes[currentQuote]).fadeIn(200);
    });
  }

  const quoteTimer = setInterval(changeQuote, 3000);
});
