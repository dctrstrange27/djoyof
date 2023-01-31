const Product = require("../models/products");

const newProduct = (req, res) => {
    const { product_name, product_price, image, description } = req.body;
    Product.findOne({ product_name: `${product_name}` },function (err, user) {
        if (err) {
            return res.status(200).json({ message: err });
        }
        if (user) {
            return res.status(200).json({ message: "the product is already exist" });
        } else {
            var newProduct = new Product();
            newProduct.save(function (err) {
                Product.create({
                    product_name: `${product_name}`,
                    product_price: `${product_price}`,
                    image: `${image}`,
                    description: `${description}`,
                });
                return res.status(200).json({ message: newProduct });
            });
        }
    });
}
const updateProduct =(req,res)=>{
    res.json({message:"Update products"})
}

const deleteProduct=(req,res)=>{
    res.json({message:"delete product"})
}



module.exports = {
    newProduct,
    updateProduct,
}
