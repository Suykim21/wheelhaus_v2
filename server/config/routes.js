let bike = require('./../controllers/bikes_controller.js');
let essential = require('./../controllers/essentials_controller.js');
let cart = require('./../controllers/cart_controller.js');

module.exports=(app)=>{
  // Cart ***** routes
  // app.get("/api/getCart", cart.getCart);
  // app.get("/api/removeItem/:id", cart.removeItem);
  // app.get("/api/clearCart", cart.clearCart);
  // app.post("/api/addItem/:type", cart.addItem);
  // // Essential Routes ***** 1st two are to upload image/add accessory to db
  // app.post("/api/addEssential", essential.addEssential);
  // app.get("/api/getAllEssentials", essential.getAllEssentials);
  // app.get('/api/essentials/show/:id', essential.getEssential);
  // app.get("/api/get3Essentials", essential.get3Essentials);
  // // Essential Filters *****
  // app.get('/api/getExpensiveEssentials', essential.getExpensiveEssentials);
  // app.get('/api/getCheapestEssentials', essential.getCheapestEssentials);
  // app.get('/api/getPopularEssentials', essential.getPopularEssentials);
  // app.get('/api/getLimitedEssentials', essential.getLimitedEssentials);
  // //  Bike Routes *****
  // app.post("/api/addBike", bike.addBike);
  // app.get("/api/getAllBikes", bike.getAllBikes);
  // app.get('/api/bikes/show/:id', bike.getBike);
  // app.get("/api/get3Bikes", bike.get3Bikes);
  // // Bike Filters *****
  // app.get("/api/getExpensiveBikes", bike.getExpensiveBikes);
  // app.get("/api/getCheapestBikes", bike.getCheapestBikes);
  // app.get("/api/getPopularBikes", bike.getPopularBikes);
  // app.get("/api/getLimitedBikes", bike.getLimitedBikes);
}