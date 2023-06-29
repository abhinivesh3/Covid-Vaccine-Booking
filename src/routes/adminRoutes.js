const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
  

router.get('/',(req,res)=>{
    res.render('adminLogin')
})

// get admin Login Page and post create login
router.get('/login', adminController.getAdminLoginPage).post('/login', adminController.login);

// get  logout
router.get('/logout', adminController.logout);

// get Dashboard Page
router.get('/dashboard', adminController.getDashboardPage);

// get Search Page to admin main page
router.get('/search', adminController.getSearchPage);

// post create for Centre
router.post('/centres', adminController.addCentre);

// get Dosage Details
router.get('/dosage', adminController.getDosageDetails);

// post create for remove centre
router.post('/remove-centre', adminController.removeCentre);

module.exports = router;