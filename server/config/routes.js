var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){

	app.get('/customers', customers.index);

	app.post('/customers', customers.create);

	app.delete('/customers/:id', customers.delete);

	app.get('/orders', orders.index);

	app.post('/orders', orders.create);

}