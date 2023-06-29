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

// Get Login Page
router.get('/login', userController.getLoginPage);

// Post create Login
router.post('/login', userController.login);

// get signup into user
router.get('/signup', (req, res) => {
    res.render('signup');
});

// get user signup page
router.get('/signup', userController.getSignupPage);

// post create user signup
router.post('/signup', userController.signup);

// get logout for user
router.get('/logout', userController.logout);

// get Search Page for main of user 
router.get('/search', userController.getSearchPage);

// get search centres for user
router.get('/searchResults', userController.searchCentres);

//post create an application for user in given slot
router.post('/apply', userController.applyForSlot);


module.exports = router;