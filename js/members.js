import { memberList } from "./data.js";

//fullCard is each card combined to one html
var fullCard = ``;

memberList.forEach(member => {
    var data = Object.values(member);
    fullCard += `
    <div class="member">
        <img class="member-photo" src="images/${data[2]}"/>
        <div class="member-description">
            <div class=member-name">${data[0]}</div>
            <div class=member-blurb">${data[1]}</div>
        </div>
    </div>
    `
})

class MembersTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `${fullCard}`;
    }
}

customElements.define("members-section", MembersTemplate)