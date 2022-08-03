const express = require('express');
const route = express.Router(); //Gets 'app' from server.js and renames it to 'route'

const services = require('../services/render');

/*
Root Route
*/
route.get('/', services.homeRoutes);

/*
Add Users
/add-user
*/
route.get('/add-user', services.add_user);

/*
Updates Users
/update-user
*/
route.get('/update-user', services.update_user);

//Export route so that server.js can use it
module.exports = route;
