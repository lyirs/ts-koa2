import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa2-cors';
import statics from 'koa-static';
import path from 'path';

import { host, port } from './utils/utils';
import web from './router/web';
import manage from './router/manage';
import nomatch from './router/nomatch';

const app = new Koa();
const router = new Router();

// Todo: if the path is '/*', the server will crash at lint 8
router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.use('/web', web.routes(), web.allowedMethods());
router.use('/manage', manage.routes(), manage.allowedMethods());
router.use('/404', nomatch.routes(), nomatch.allowedMethods());

app.use(async (ctx, next) => {
    await next();
    if (ctx.status === 404) {
        ctx.response.redirect('/404');
    }
});

app.use(cors()); // 允许跨域
app.use(router.routes()).use(router.allowedMethods());
app.use(statics(path.join(__dirname, 'static')));

app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
});
