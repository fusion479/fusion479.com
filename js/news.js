import {cards} from "data.js";

//fullcard is resulting html of cards combined
var fullcard = ``;

//goes through cards variable and makes a new box for every dictionary
cards.forEach (card => {
    var data = Object.values(card);
    //console.log(data);
    fullcard += `
    <a href="pages/${data[3]}.html" class="news-box">
        <div class="news-title">${data[0]}</div>
        <div class="news-creation">Created on ${data[1]}</div>
        <div class="news-caption">${data[2]}</div>
    </a>
    `
})

console.log(fullcard);

class CardTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `${fullcard}`
    }

}

customElements.define("news-cards",CardTemplate)