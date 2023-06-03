import { ViewComponent } from "../../base/ViewComponent.js";

export class BroswerView extends ViewComponent{
    render(req,res){
        res.render("home",{data:"oa mundos luiz"})
    }
}