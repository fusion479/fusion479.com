import { newsCards } from "./data.js";

//fullCard is each card combined to one html
var fullCard = ``;

//goes through cards variable and makes a new box for every dictionary
newsCards.forEach (news => {
    var data = Object.values(news);
    //console.log(data);
    fullCard = `
    <a href="pages/${data[3]}.html" class="news-box">
        <div class="news-title">${data[0]}</div>
        <div class="news-creation">Created on ${data[1]}</div>
        <div class="news-caption">${data[2]}</div>
    </a>
    ` + fullCard;
})

//console.log(fullCard);
class NewsTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `${fullCard}`
    }
}

var indexNews = ``;

for (var i = 1; i < 4; i ++) {
    const currentNewsCard = newsCards[newsCards.length-i];
    var border = ` border`;
    if (i == 3) border = ``;
    if (currentNewsCard != null) {
        var data = Object.values(currentNewsCard);
        indexNews += `
        <a href="pages/${data[3]}.html" class="news-box${border}">
            <div class="news-title">${data[0]}</div>
            <div class="news-creation">Created on ${data[1]}</div>
            <div class="news-caption">${data[2]}</div>
        </a>
        `
    }
}

class IndexNewsTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `${indexNews}`
    }
}

customElements.define("news-cards",NewsTemplate)
customElements.define("index-news",IndexNewsTemplate)