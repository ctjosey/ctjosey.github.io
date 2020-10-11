let requestURL = "https://ctjosey.github.io/js/quotes.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const myData = request.response;
    createQuoteBlock(myData);
}

function createQuoteBlock(data) {
    let random = Math.floor(Math.random() * Math.floor(data.count));
    console.log(random);
    let para = document.createElement('q');
    para.textContent = data[random].quote;
    document.body.appendChild(para);
}