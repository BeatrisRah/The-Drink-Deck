import { html } from "lit-html";
import dbApi from "../dbApi.js";
import { card_template} from "./catalog.js";



const section = (isLoaded = true, list = [] , eventHandler) => html`
<section class="catalog">
        
        <div class="catalog_titles">
            <h1>Ingredients</h1>
            <p>Selection of recipes based on your ingredients!</p>
        </div>
        <div class="catalog_content">
            <div class="catalog_card_wrapper">
                ${isLoaded ? html`<span class="loader"></span>`: html`
                ${list.map(el => card_template(el, eventHandler))}`}
                
                
            </div>
            
        </div>

    
</section>`

export async function recipeResultsPage(ctx){
    const ingredients = decodeURIComponent(ctx.params.ingredients).split(',');

    ctx.render(section(true, [] , redirectPage))
    
    const matchesRecepies = await dbApi.getByingredients(ingredients);
    ctx.render(section(false, matchesRecepies , redirectPage.bind(ctx)))
    
}

function redirectPage(e){
    const drinkId = e.currentTarget.getAttribute('drink-id');     
    
    this.goTo(`/pick-ingredients/details/${drinkId}`)
}