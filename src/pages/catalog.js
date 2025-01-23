import { html } from "lit-html";
import dbApi from "../dbApi.js";

const section = (category, drink_array) => html`
<section class="catalog">
        
        <div class="catalog_titles">
        ${category}
        </div>
        <div class="catalog_content">
            <div class="catalog_card_wrapper">
                ${drink_array.map(card_template)}
                
            </div>
            
        </div>

    
</section>`

const card_template = (drink) => html`
<div class="catalog_card">
    <img src="${drink.imageURL}">
    <p class="catalog_card_title">${drink.name}</p>
</div>`

const drinks_titles = {
    hot: html`
        <h1>HOT DRINKS</h1>
        <p>Cozy up with warm drinks that soothe the soul. Perfect for chilly nights.</p>`,
    all: html`
        <h1>ALL DRINKS</h1>
        <p></p>`,
    cold:html`
        <h1>COLD DRINKS</h1>
        <p>Cool, crisp, and refreshing!</p>`,
    sessonal:html`
        <h1>SESSONAL DRINKS</h1>
        <p>Sip the flavors of the season with drinks inspired by fresh ingredients and festive vibes.</p>`,
    alcohol:html`
        <h1>ALCOHOL DRINKS</h1>
        <p>From classic cocktails to innovative twists, discover recipes that make happy hour even happier.</p>`,
}


export async function catalog(ctx){
    const drink_category = ctx.params.category;
    let drinks = await dbApi.fetchData();

    let drink_title = '';
    switch(drink_category){
        case "all":
            drink_title = drinks_titles.all;
            break;
        case 'hot':
            drink_title = drinks_titles.hot;
            break;
        case 'cold':
            drink_title = drinks_titles.cold;
            break;
        case 'sessonal':
            drink_title = drinks_titles.sessonal;
            break;
        case 'alcohol':
            drink_title = drinks_titles.alcohol;
            break;
    }

    if(drink_category !== 'all'){
        drinks = Object.values(drinks).filter(el => el.category == drink_category)
    }
    
    
    ctx.render(section(drink_title, drinks))
}