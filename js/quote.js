const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => refreshQuote(data));
};

const refreshQuote = (quote) => {
  console.log(quote);
  const quoteItem = document.getElementById("quote-item");
  quoteItem.innerHTML = quote.quote;
};
