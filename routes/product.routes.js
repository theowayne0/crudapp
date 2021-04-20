module.exports = (app) => {
   const products = require('../controllers/product.controller.js');

   // Create a new Product
   app.post('/products', products.create);

   // Get all Products
   app.get('/products', products.getAll);

   // Get a single Product with productbookId
   app.get('/products/:productId', products.getById);

   // Update a Product with productbookId
   app.put('/products/:productId', products.update);

   // Delete a Product with productbookId
   app.delete('/products/:productId', products.delete);
}