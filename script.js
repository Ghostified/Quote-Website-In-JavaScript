const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/quotes/random?tags=technology,famous-quotes";


async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data)

    //Since the data is an array
    var quoteData = data[0];

    quote.innerHTML = quoteData.content;
    author.innerHTML = quoteData.author;

    console.log(quoteData);
}
getquote(api_url);
