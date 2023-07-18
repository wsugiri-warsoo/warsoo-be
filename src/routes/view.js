const router = require('express').Router();

router.get('/', (req, res) => res.render('home', { title: '-- Landing Page --', message: 'Landing Page' }));
router.get('/about', (req, res) => res.render('about', { title: '-- About Page --', message: 'Hi, you area on about page' }));
router.get('/login', (req, res) => res.render('login', { title: '-- Login Page --', message: 'Login Page' }));

module.exports = router;