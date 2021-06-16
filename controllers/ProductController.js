import Products from "../store/products.js";

class ProductController {
    getProuducts(req, res) {
        console.log(Products);
        return res.json(Products);
    }
    getProductById(req, res) {
        res.json(
            Products.find((product) => {
                return +req.params.id === product.id;
                // return req.params.id === product.id
            })
        );
        // res.send(req.params);
    }
    addProduct(req, res) {
        console.log(req.body.id);
        res.status(202).json({ msg: "Product has been added!" });
        // res.send("hello this is add product");
    }
}

export default new ProductController();
