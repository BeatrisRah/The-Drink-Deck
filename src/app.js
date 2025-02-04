import { render } from "lit-html";
import page from "page";
import { homeView } from "./pages/home.js";
import { updateNav } from "./nav.js";
import { catalog } from "./pages/catalog.js";
import { detailsPage } from "./pages/details.js";
import { pickIngredienst } from "./pages/pick-ingredients.js";
import { recipeResultsPage } from "./pages/recipe-result.js";



const root = document.getElementById('root');
const body = document.querySelector('body')
page(updateCTX)
page(updateNav)
page('/',homeView)
page('/catalog/:category', catalog)
page('/catalog/:category/:drinkID', detailsPage)
page('/pick-ingredients', pickIngredienst)
page('/pick-ingredients/:ingredients', recipeResultsPage)
page('/pick-ingredients/details/:drinkID', detailsPage)
page()




function updateCTX(ctx, next){
    ctx.render = rerender;
    ctx.baseRender = baserender;
    ctx.goTo = goTo;
    ctx.changeBody = changeBody;
    
    next()
}
function rerender(templ){
    render(templ, root)
}
function baserender(templ,container){
    render(templ,container)
}

function goTo(path){
    page(path)
}

function changeBody(size){
    body.style.height = size;
}