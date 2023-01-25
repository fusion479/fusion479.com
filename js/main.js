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
                        <div class="blue">Stuy Fusion</div>
                    </div>
                </a>
                <ul>
                    <li><a href="${linkdir}team-news.html">Team News</a></li>
                    <li><a href="${linkdir}our-robot.html">Our Robot</a></li>
                    <li><a href="${linkdir}members.html">Meet the Team</a></li>
                    <li><a href="${linkdir}donate.html" class="donation">Sponsor</a></li>
                    <li><a href="${linkdir}merch.html" class="donation">Buy Merch</a></li>
                </ul>
                <div class="menu-button">
                    MENU
                </div>
            </header>

            <div class="mobile-menu">
                <ul>
                    <a href="${linkdir}team-news.html"><li>Team News</li></a>
                    <a href="${linkdir}our-robot.html"><li>Our Robot</li></a>
                    <a href="${linkdir}members.html"><li>Meet the Team</li></a>
                    <a href="${linkdir}donate.html" class="donation"><li>Sponsor</li></a>
                    <li><a href="${linkdir}merch.html" class="donation">Buy Merch</a></li>
                </ul>
            </div>
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
                <a class="icon" href="https://ftcscout.org/teams/479" target="_blank">
                    <i class="fa-solid fa-binoculars fa-xl"></i>
                </a>
            </div>
            <div class="copyright">© Stuy Fusion 2023</div>
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
    if(link.href.includes(`${activePage}`) && activePage.length > 1){
        link.classList.add("active");
    }
})

const navLinksMobile = document.querySelectorAll(".mobile-menu a").
forEach(link => {
    //checks each navbar link's location and if they point to activePage make them active
    if(link.href.includes(`${activePage}`) && activePage.length > 1){
        console.log(activePage)
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

//opens menu if closed and closes if opened, changes color of menu button too
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click",function(){
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        menuButton.style.color = "gray";
    } else {
        mobileMenu.classList.add("active")
        menuButton.style.color = "rgb(66, 213, 236)";
    }
})

const arrowSVG = document.querySelector("path.ionicon-fill-none")
console.log(arrowSVG)