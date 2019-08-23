import express from 'express';
import ejs from 'ejs';
import layout from 'express-ejs-layouts';
import livereload from 'livereload';
import livereloadMiddleware from 'connect-livereload';
import opn from 'opn';

const live_server = livereload.createServer({
    exts: ['html', 'css'],
    debug: true
});

live_server.watch(__dirname);

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layout/layout.html');
app.set('layout extractScripts', true);
app.engine('html', ejs.renderFile);

app.use(layout);
app.use(express.static(__dirname + '/public'));
app.use(livereloadMiddleware());

app.listen(PORT, () => {
    console.log(`서버가 시작됐어염 http://127.0.0.1:${PORT}`);

    opn(`http://127.0.0.1:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/:page', (req, res) => {
    res.render(`${req.params.page}.html`, { layout: 'layout/sublayout.html' });
});

app.get('/:folder/:page', (req, res) => {
    res.render(`${req.params.folder}/${req.params.page}.html`, { layout: 'layout/sublayout.html' });
});
