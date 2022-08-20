console.log(10)

class HeaderTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="nav">
                <a href="index.html">
                    <div class="logo">
                        <div class="one">479</div>
                        <div class="two">STUY</div>
                        <div class="three">FUSION</div>
                    </div>
                </a>
                <ul>
                    <li><a href="#">Team News</a></li>
                    <li><a href="#">link two</a></li>
                    <li><a href="#">link three</a></li>
                    <li><a href="#">link four</a></li>
                    <li><a href="#">Sponsors</a></li>
                    <li><a href="donate.html" class="donation">Donate</a></li>
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
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a class="icon" href="https://www.instagram.com/StuyFusion" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div class="copyright">© StuyFusion</div>
        </div>
        `
    }
}

customElements.define("header-template", HeaderTemplate)
customElements.define("footer-template", FooterTemplate)
    