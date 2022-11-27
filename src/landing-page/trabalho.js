class Clicar {
    constructor(btnEntrar, fluAr, voAr) {
        this.btnEntrar = document.querySelector(btnEntrar)
        this.fluAr = document.querySelector(fluAr)
        this.voAr = document.querySelectorAll(voAr)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this);

    }
    animateLinks() {
        this.voAr.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = "listFade 0.5s ease forwards 0.3s");
        });
    }

    handleClick() {
        this.fluAr.classList.toggle(this.activeClass)
        this.animateLinks();



    }

    addClickEvent() {
        this.btnEntrar.addEventListener('click', this.handleClick);

    }
    init() {
        if (this.btnEntrar) {
            this.addClickEvent();
        }
        return this
    }

}
const clicar = new Clicar(
    '.menu',
    '.listagem',
    '.listagem li',
);
clicar.init();



