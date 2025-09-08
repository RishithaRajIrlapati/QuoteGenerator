const quoteText = document.querySelector('p');
const button = document.querySelector('button');

const api_url = "https://zenquotes.io/api/random";
const proxy = "https://api.allorigins.win/get?url=";

async function getQuote() {
  try {
    quoteText.textContent = "Fetching quote...";

    // Fetch through proxy with cache-busting
    const response = await fetch(proxy + encodeURIComponent(api_url) + "&t=" + Date.now());
    const data = await response.json();

    const quoteData = JSON.parse(data.contents);

    quoteText.textContent = `"${quoteData[0].q}"`;
  } catch (error) {
    quoteText.textContent = "Oops! Couldn’t fetch a quote.";
    console.error("Error fetching quote:", error);
  }
}

getQuote();
button.addEventListener('click', getQuote);







