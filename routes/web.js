import { app } from "../app.js";
import productController from "../controllers/ProductController.js";
import { mid } from "../middlewares/common.js";

app.get("/", mid, (req, res) => {
    res.send("Hello World!");
});

app.get("/products", mid, (req, res) => {
    productController.getProuducts(req, res);
});

app.get("/product/:id", mid, (req, res) => {
    productController.getProductById(req, res);
});

app.post("/add_product", mid, (req, res) => {
    productController.addProduct(req, res);
});

export default app;
