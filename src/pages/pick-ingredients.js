import { html } from "lit-html";
import list from "../ingredientsList.js";

const iTemp = (i) => html`
<div class='ingredient_button'>
    <button type='button'  aria-label="${i.label}">
        ${i.svg}
    </button>
    <p>${i.p}</p>
</div>`

const templ =(list)=> html`
<div id='pick_ingredients_page'>
    <form>
        <div class='ingredienst_div'>
            <h2>Dairy & Non-Dairy Alternatives</h2>
            <h3>Milk</h3>
            <div class="svg_div">
                ${list['dairy_milk'].map(iTemp)}
            
            </div>
            
            <h3>Other</h3>
            <div class="svg_div">
                
                ${list['dairy_other'].map(iTemp)}
            </div>
            
        </div>
        
        <div class='ingredienst_div'>
            <h2>Sweeteners</h2>

            <div class="svg_div">
                

                ${list['sweeteners'].map(iTemp)}

                
            </div>
        </div>
        <div class='ingredienst_div'>
            <h2>Fruits</h2>
            <div class="svg_div">
                ${list['fruits'].map(iTemp)}
            </div>
        </div>
        <div class="ingredienst_div">
            <h2>Spices & Herbs</h2>
            <div class="svg_div">
                
            </div>
        </div>
    </form>
</div>`





export function pickIngredienst(ctx) {
    console.log();
    
    ctx.render(templ(list))
}