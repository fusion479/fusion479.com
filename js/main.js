console.log(10)

var fileLoc = window.location.pathname;
var currentDir = fileLoc.substring(0, fileLoc.lastIndexOf("/"));
currentDir = currentDir.substring(currentDir.lastIndexOf("/")+1);

//checks if the html file is in pages folder, if it is, adds ../ to the header links
if (currentDir === "pages"){
    var linkdir = "../";
} else {
    var linkdir = "";
}

class HeadBoilerplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>479</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://kit.fontawesome.com/50596a3a4b.js" crossorigin="anonymous"></script>
        `
    }
}

class HeaderTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="nav">
                <a href="${linkdir}index.html">
                    <div class="logo">
                        <img class="icon" src=${linkdir}images/logo-icon.png>
                        <div class="one">479</div>
                        <div class="two">STUY</div>
                        <div class="three">FUSION</div>
                    </div>
                </a>
                <ul>
                    <li><a href="${linkdir}team-news.html">Team News</a></li>
                    <li><a href="${linkdir}our-robot.html">Our Robot</a></li>
                    <li><a href="${linkdir}members.html">Meet the Team</a></li>
                    <li><a href="${linkdir}donate.html" class="donation">Sponsor</a></li>
                </ul>
            </header>
        `
    }

}

class FooterTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="social-icons">
                <a class="icon" href="https://github.com/fusion479" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a class="icon" href="https://www.instagram.com/StuyFusion" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
            <div class="copyright">© StuyFusion</div>
        </div>
        `
    }
}

customElements.define("header-boilerplate", HeadBoilerplate);
customElements.define("header-template", HeaderTemplate);
customElements.define("footer-template", FooterTemplate);
    
//current page's name
const activePage = window.location.pathname;

const navLinks = document.querySelectorAll(".nav ul a").
forEach(link => {
    //checks each navbar link's location and if they point to activePage make them active
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})

const logo = document.querySelector(".logo");
const icon = document.querySelector(".icon");
logo.addEventListener("mouseover",function(){
    icon.classList.add("big");
})

logo.addEventListener("mouseout",function(){
    icon.classList.remove("big");
})