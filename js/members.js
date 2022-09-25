import { memberList } from "./data.js";

//fullCard is each card combined to one html
var fullCard = ``;

//count used to check whether member section is the last
let count = 0;

memberList.forEach(member => {
    count ++;
    let border = ``;
    //if section is the last one, then it won't have a bottom border
    if (count == memberList.length) border = `border`;
    var data = Object.values(member);
    fullCard += `
    <div class="member ${border}">
        <div class="member-photo-container">
            <img class="member-photo" src="images/members/${data[0]}"/>
        </div>
        <div class="member-description">
            <div class="member-name">${data[1]}</div>
            <div class="member-title">${data[2]}</div>
            <div class="member-blurb">${data[3]}</div>
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