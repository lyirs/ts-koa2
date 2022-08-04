import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

const router = new Router();

router.get('/', async (ctx) => {
    const filepath = path.join(__dirname, '../static/images/404.png');
    const file = fs.readFileSync(filepath);
    const mimeTypes = mime.lookup(filepath);
    ctx.set('content-Type', mimeTypes as string);
    ctx.body = file;
});
export default router;
