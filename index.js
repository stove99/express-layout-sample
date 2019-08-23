import express from 'express';
import ejs from 'ejs';
import layout from 'express-ejs-layouts';
import livereload from 'livereload';
import livereloadMiddleware from 'connect-livereload';
import favicon from 'express-favicon';

import router from './routes';

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
app.use(favicon(`${__dirname}/public/favicon.png`));
app.use(router);

app.listen(PORT, () => {
    console.log(`서버가 시작됐어염. http://127.0.0.1:${PORT} 로 접속하세요.`);
});
