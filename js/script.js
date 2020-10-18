let requestURL = "https://ctjosey.github.io/js/quotes.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const response = request.response;
    createQuoteBlock(response);
}

function createQuoteBlock(data) {
    let random = Math.floor(Math.random() * Math.floor(data.length));
    let para = document.createElement('q');
    para.textContent = data[random]['quote'];
    let quotee = document.createElement('b');
    quotee.textContent = " ~ " + data[random]['name'];
    let quoteBlock = document.getElementById('quote');
    quoteBlock.appendChild(para);
    quoteBlock.appendChild(quotee);
}
