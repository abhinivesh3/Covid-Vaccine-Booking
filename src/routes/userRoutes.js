const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 

router.get('/',(req,res)=>{
    res.render('login')
})

// User routes
router.get('/login', (req, res) => {
    res.render('login');
});

// Get Login Page and  Post create Login
router.get('/login', userController.getLoginPage).post('/login', userController.login);

// Get signup into user
router.get('/signup', (req, res) => {
    res.render('signup');
});

// get user signup page and Post create user signup
router.get('/signup', userController.getSignupPage).post('/signup', userController.signup);

// get logout for user
router.get('/logout', userController.logout);

// get Search Page for main of user 
router.get('/search', userController.getSearchPage);

// get search centres for user
router.get('/searchResults', userController.searchCentres);

//post create an application for user in given slot
router.post('/apply', userController.applyForSlot);


module.exports = router;