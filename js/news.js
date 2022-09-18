import { newsCards } from "./data.js";

//fullCard is each card combined to one html
var fullCard = ``;

//goes through cards variable and makes a new box for every dictionary
newsCards.forEach (news => {
    var data = Object.values(news);
    //console.log(data);
    fullCard += `
    <a href="pages/${data[3]}.html" class="news-box">
        <div class="news-title">${data[0]}</div>
        <div class="news-creation">Created on ${data[1]}</div>
        <div class="news-caption">${data[2]}</div>
    </a>
    `
})

//console.log(fullCard);

class NewsTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `${fullCard}`
    }
}

customElements.define("news-cards",NewsTemplate)