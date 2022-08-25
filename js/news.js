//for every new page in pages directory, just add a new dictionary to make the data
//dont include .html for pagelink
/*
    {
        title: "",
        date: "",
        caption: "",
        pagelink: "",
    },
*/
var cards = [
    {
        title: "First News!",
        date: "January 08, 2005",
        caption: "I don't know what to put as a caption",
        pagelink: "01-08-2005",
    },
    {
        title: "test",
        date: "August 29, 199293",
        caption: "lol",
        pagelink: "08-29-199293",
    },
];

//fullcard is all the boxes combined
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