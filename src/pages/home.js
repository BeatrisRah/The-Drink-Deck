import { html } from "lit-html";

const template = html`
<section id="home">
    <div id="home-headings">
        <h1>Welcome to The Drink Deck!</h1>
        <p>Drinks for every occasion, right at your fingertips.</p>
    </div>
        
    <div id="card-wrapper">
        <div class="drink-card">
            <div class="card-content-wrap">
                <p class="card-title">Sessonal</p>
            <img alt="all drink category" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-drink-grocery-flatart-icons-outline-flatarticons-1.png" alt="external-drink-grocery-flatart-icons-outline-flatarticons-1"/>
            <div class="card-line"></div>
            </div>
        </div>

        <div class="drink-card">
            <div class="card-content-wrap">
                <p class="card-title">All</p>
                <img src="public/all.png" alt="sesonal drinks category">
                <div class="card-line"></div>
            </div>
            
        </div>
        
        <div class="drink-card">
            <div class="card-content-wrap">
                <p class="card-title">Hot</p>
            <img width="100" height="100" src="https://img.icons8.com/fluency-systems-regular/100/cafe.png" alt="cafe"/>
            </div>
            
        </div>

        <div class="drink-card">
            <div class="card-content-wrap">
                <p class="card-title">Cold</p>
                <img width="100" height="100" src="https://img.icons8.com/pulsar-line/100/iced-coffee.png" alt="iced-coffee"/>
                <div class="card-line"></div>
            </div>
            
        </div>
        <div class="drink-card">
            <div class="card-content-wrap">
                <p class="card-title">Alcohol</p>
                <img width="96" height="96" src="https://img.icons8.com/pulsar-line/96/beach-cocktail.png" alt="beach-cocktail"/>
                <div class="card-line"></div>
            </div>
            
        </div>
    </div>
    
    <div class="home-button">
        <a>
            Not sure? Search by the ingredients you have!
        </a>
        <span>
            Search by ingredients
        </span>
    </div>
</section>`

export function homeView(ctx){
    ctx.render(template)
}