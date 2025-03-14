import { html } from "lit-html";

const nav = document.querySelector('nav')

const navTempl = (clickHandler) => html`
<a class="nav-links" href="/">Home</a>
<a class="nav-links" href="/catalog/all">Catalog</a>
<a class="nav-links" href="/pick-ingredients">Ingredients</a>
<a class="nav-links" href="/about">About</a>
<a class="nav-links" href="/contact">Contact</a>

<svg @click=${clickHandler} id="hamburger-menu" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,300,150">
    <g fill="#f3f3db" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
</svg>
<div class="hamburger-content" toggle="closed">
    <a class="hamburger-links" href="/">Home</a>
    <a class="hamburger-links" href="/catalog/all">Catalog</a>
    <a class="hamburger-links" href="/pick-ingredients">Ingredients</a>
    <a class="hamburger-links" href="/about">About</a>
    <a class="hamburger-links" href="/contact">Contact</a>
</div>`


export function updateNav(ctx, next) {
    ctx.baseRender(navTempl(hamburgerMenu), nav)
    next()
}

function hamburgerMenu(e) {
    const hamburgerContent = e.currentTarget.nextElementSibling;
    const isClosed = hamburgerContent.getAttribute('toggle') == 'closed' ? true : false;

    if (isClosed) {
        // hamburgerContent.style.display = 'flex';
        hamburgerContent.setAttribute('toggle', 'open')
    } else {
        // hamburgerContent.style.display = 'none';
        hamburgerContent.setAttribute('toggle', 'closed')
    }


}