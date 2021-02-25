import Express from "express";
import Products from "./store/products.js";

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));


function mid(req, res, next){
    console.log(req.body);
    console.log(req.params);
    next();
}


app.get("/", mid, (req, res) => {
   res.send("Hello World!");
});


app.get("/products", mid, (req, res) => {
    res.json(Products);
})

app.get("/product/:id", mid, (req, res) => {

    res.json(Products.find((product)=>{
        return +req.params.id === product.id;
        // return req.params.id === product.id
    }));
    // res.send(req.params);
});

app.post("/add_product",mid,(req, res) => {
    console.log(req.body.id);
    res.sendStatus(200);
    // res.send("hello this is add product");
});

app.listen(port, () => console.log("listening on port " + port))

