var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');

module.exports = function(app){

	app.get('/customers', customers.index);

	app.get('/customers/:name', customers.show);

	app.post('/customers', customers.create);

	app.delete('/customers/:id', customers.delete);

	app.get('/orders', orders.index);

	app.post('/orders', orders.create);

	app.get('/products', products.index);

	app.post('/products', products.create);
}