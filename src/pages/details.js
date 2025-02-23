import { html } from "lit-html";
import dbApi from "../dbApi";

const templ = (drink) => html`
<section id='description_page'>

    <div id='details_wrapper'>
        <div class="details_upper">
            <div class="details_img_div">
                <img src="${drink.imageURL}" alt="${drink.name}" >
            </div>
            
            <div class="details_desription_titels">
                <h1>${drink.name}</h1>
                <p>${drink.description}</p>
                <a href='${drink.originURL}' >@original recipe</a>
                <div class="details_tags" >
                    ${drink.category.map(el => html`<button>${el.toUpperCase()}</button>`)}
                </div>
            </div>
        </div>
        <div class="details_bottom">
            <div class="details_ingredients">
                <h1>Ingredients</h1>
                <ul>
                    ${drink.ingredients.map(el => html`<li><b>${el.amount}</b> ${el.name}</li>`)}
                </ul>
            </div>
            <div class="details_preparation" >
                <h1>Preparation</h1>
                <ol>
                    ${drink.preparation.map(el => html`
                    <li class="li_wrapper">
                        <p>${el}</p>
                    </li>
                    `)}
                </ol>
            </div>
        </div>
    </div>
</section>
`

export async function detailsPage(ctx){
    const drinkID = ctx.params.drinkID;    
    
    try{
        const drink = await dbApi.getOne(drinkID);
        // ctx.changeBody('fit-content')
        ctx.render(templ(drink))
    } catch(err){
        console.log(err);
        
    }

    
}