import { html } from "lit-html";

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
const drinks_titles = {
    hot: html`
        <h1>HOT DRINKS</h1>
        <p>Cozy up with warm drinks that soothe the soul. Perfect for chilly nights.</p>`,
    all: html`
        <h1>ALL DRINKS</h1>
        <p>Cozy up with warm drinks that soothe the soul. Perfect for chilly nights.</p>`,
}

const card_template = (drink) => html`
<div class="catalog_card">
    <img src="${drink.imageURL}">
    <p class="catalog_card_title">${drink.name}</p>
</div>`

export function catalog(ctx){
    const drink_category = ctx.params.category;
    const drinks = [
        {imageURL:'https://hips.hearstapps.com/hmg-prod/images/delish-220517-dirty-shirley-cocktail-001-ab-web-1657145301.jpg?crop=0.828xw:0.829xh;0.123xw,0.0932xh&resize=980:*',
        name:'(hot) drink'},
        {imageURL:'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Frecipes%2F2023%2F2023-08-starbucks-pink-drink%2Fstarbucks-pink-drink-3',
        name:'strawberry shake'
        }
    
    ] //temporary

    let drink_title = '';
    if(drink_category == 'all'){
        drink_title = drinks_titles.all;
    }
    
    ctx.render(section(drink_title, drinks))
}