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
    console.log(data.length);
    console.log(random);
    let para = document.createElement('q');
    para.textContent = data[random]['quote'];
    document.body.appendChild(para);
}