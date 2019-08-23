import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/:page', (req, res) => {
    res.render(`${req.params.page}.html`, { layout: 'layout/sublayout.html' });
});

router.get('/:folder/:page', (req, res) => {
    res.render(`${req.params.folder}/${req.params.page}.html`, { layout: 'layout/sublayout.html' });
});

export default router;
