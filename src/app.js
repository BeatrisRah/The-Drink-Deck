import { render } from "lit-html";
import page from "page";
import { homeView } from "./pages/home.js";
import { updateNav } from "./nav.js";

const root = document.getElementById('root');
page(updateCTX)
page(updateNav)
page('/',homeView)
page()

function updateCTX(ctx, next){
    ctx.render = rerender;
    ctx.baseRender = baserender;
    next()
}
function rerender(templ){
    render(templ, root)
}
function baserender(templ,container){
    render(templ,container)
}
