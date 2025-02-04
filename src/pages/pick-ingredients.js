import { html } from "lit-html";
import list from "../ingredientsList.js";

const iTemp = (i) => html`
<div class='ingredient_button'>
    <button type='button'  aria-label="${i.label}" @click=${buttonsToggle}>
        ${i.svg}
    </button>
    <p>${i.p}</p>
</div>`

const templ =(list, formEvent)=> html`
<div id='pick_ingredients_page'>
    <form @submit=${formEvent}>
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
                ${list['spices'].map(iTemp)}
            </div>
        </div>

        <div class='ingredienst_div'>
            <h2>Teas & Coffees</h2>
            <div class="svg_div">
            ${list['coffeas'].map(iTemp)}
            </div>
        </div>

        <div class='ingredienst_div'>
            <h2>Alcoholic Bases</h2>
            <div class="svg_div">
            ${list['alcohol'].map(iTemp)}
            </div>
        </div>

        <div class='ingredienst_div'>
            <h2>Other</h2>
            <div class="svg_div">
            ${list['other'].map(iTemp)}
            </div>
        </div>
        <button type='submit'>Search</button>
    </form>
</div>`


function buttonsToggle(e){    
    e.currentTarget.classList.toggle('selected');
}

function formSubmit(e){
    e.preventDefault()

    const buttons = e.currentTarget.querySelectorAll('button')
    const selectedLabels = Array.from(buttons)
    .filter(button => button.classList.contains('selected'))
    .map(button => button.getAttribute('aria-label'));
    
    if (selectedLabels.length > 0) {
        this.goTo(`/pick-ingredients/${encodeURIComponent(selectedLabels.join(','))}`);
    } else {
        alert("Please select at least one ingredient.");
    }
    
}


export function pickIngredienst(ctx) {
    ctx.render(templ(list, formSubmit.bind(ctx)))
}