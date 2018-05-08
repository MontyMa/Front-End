const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const staticss = require('koa-static');
const proxy = require('koa-better-http-proxy');
const route = new Router();
app.use(proxy('http://172.16.1.94', {
  port: 8089,
  filter: (ctx) => {
    return ctx.request.url.startsWith('/request');
  }
}));
// app.use(proxy({
//   proxy_rules: [
//     {
//       proxy_location:  /^\/v(?:0|1)/,
//       proxy_pass: 'http://172.16.1.94:8089/',
//       proxy_micro_service: false,
//       proxy_merge_mode: false
//     }
//   ]
// }));

// 静态资源目录对于相对入口文件index.js的路径
app.use(staticss(
  path.join(__dirname, '../lbank/dist')
));

const createPage = async (ctx, next, name) => {
  // const { url } = ctx.request;
  let viewUrl = `./view/${name}`;

  ctx.body = await new Promise((resolve, reject) => {
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    })
  });

  await next();
};

// 子路由2
route
  .get('/', async (ctx, next) => {
    await createPage(ctx, next, 'index.html');
  })
  .get('/activities', async (ctx, next) => {
    await createPage(ctx, next, 'activities.html');
  })
  .get('/404', async (ctx, next) => {
    await createPage(ctx, next, 'error-notfound.html');
  });


app.use(route.routes());

app.listen(9999);