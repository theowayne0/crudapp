const ProductModel = require('../models/product.model');

// Create and Save a new Product
exports.create = (req, res) => {
   // Create a product
   const product = new Product({
       SN: req.body.SM,
       productID: req.body.productID,
       product: req.body.product,
       paymentType: req.body.paymentType,
       amount: req.body.amount
   });

   // Save Product in the database
   product.save()
       .then(oProduct => {
           res.send(oProduct);
       }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Product."
       });
   });
};

// Get all and return all Products.
exports.getAll = (req, res) => {
   Product.find()
       .then(oProduct => {
           res.send(oProduct);
       }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while retrieving the product."
       });
   });
};

// Get a single Product with a productID
exports.getById = (req, res) => {
    Product.findById(req.params.productID)
       .then(oProduct => {
           if(oProduct) {
               res.send(oProduct);
           }
           return res.status(404).send({
               message: "Product not exist with id " + req.params.productID
           });
       }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Product not exist with id " + req.params.productID
           });
       }
       return res.status(500).send({
           message: "Error retrieving Product with id " + req.params.productID
       });
   });
};


// Update a Product by the productID
exports.update = (req, res) => {
   // Find Product and update it
   Product.findByIdAndUpdate(req.params.productID, {
       SN: req.body.SM,
       productID: req.body.productID,
       product: req.body.product,
       paymentType: req.body.paymentType,
       amount: req.body.amount
   }, {new: true})
       .then(oProduct => {
           if(oProduct) {
               res.send(oProduct);
           }
           return res.status(404).send({
               message: "Product does not exist with productID " + req.params.productID
           });

       }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Product does not exist with productID " + req.params.productID
           });
       }
       return res.status(500).send({
           message: "Some error occurred while retrieving the Product with productID" + req.params.productID
       });
   });
};