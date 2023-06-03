import express from "express";
import { BroswerView } from "./components/broswer/broswerView.js";
import ejs from "ejs"
import path from "path"
const app = express();

const __dirname = path.resolve("");
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);
app.set('views', "./module8/view");

app.get("/",(req,res)=>{
    const data = new BroswerView();
    data.render(req,res)
})

app.listen(3000,()=>{
    console.log("online!")
})