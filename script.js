const btnEl = document.getElementById("btn");
const contentEL = document.getElementById("quote");
const quoteauthorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
  try {
    //before getting quotes from an api
    btnEl.innerText = "Loading";
    btnEl.disabled=true;

    contentEL.innerText= "updatng..";
    quoteauthorEl.innerText = "updating..."
    //fetching quotes from api
    const response = await fetch(apiURL);
    const data = await response.json();

    contentEL.innerText = data.content;
    quoteauthorEl.innerText = "~ " + data.author;

    btnEl.innerText = "get a quote";
    btnEl.disabled=false;
    
  } catch (error) {
    contentEL.innerText = "Sorry an error occured!!";
    quoteauthorEl.innerText = "Try again";

    btnEl.innerText = "get a quote";
    btnEl.disabled=false;
  }
  
}
btnEl.addEventListener("click", getQuote);