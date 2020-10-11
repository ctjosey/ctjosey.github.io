data = "quotes.json";
var myData = JSON.parse(data);
var random = Math.floor(Math.random() * Math.floor(myData.count));

function createQuoteBlock() {
    let para = document.createElement('q');
    para.textContent = myData[random];
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createQuoteBlock);
}