/**
 * Created by monty on 2018/1/23.
 */
const Koa = require('koa');
const router = require('./routes');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const mongoose = require('mongoose');
const CONFIG = require('./config');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

mongoose.connect(CONFIG.mongodb);
app.use(bodyParser());

// 启用 nunjucks 模版引擎
app.use(views(path.join(__dirname, 'views'), {
  map: {html: 'nunjucks'}
}));

app.use(serve(path.join(__dirname, 'public')));

// session
// app.keys = ['somethings'];
app.use(session({
  key: CONFIG.session.key,
  maxAge: CONFIG.session.maxAge,
}, app));

// 使用路由
router(app);

// 监听4000端口
app.listen(4000, () => {
  console.log('server is running at http://localhost:4000');
});


// const fs = require('fs');
// const Router = require('koa-router');
// const home = new Router();

// const render = (pageName) => {
//   let url = `./views/${pageName}`;

//   return new Promise((resolve, reject) => {
//     fs.readFile(url, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data.toString());
//       }
//     });
//   })
// }

// // 解析上下文里node原生请求的POST参数
// const parsePostData = (ctx) => {
//   return new Promise((resolve, reject) => {
//     try {
//       let postData = '';
//       ctx.req.addEventListener('data', (data) => {
//         postData += data;
//       });
//       ctx.req.addEventListener('end', () => {

//       })
//     } catch (error) {

//     }
//   })
// }

// home.get('/', async context => {
//   if (context.method === 'POST') {

//   }
//   let html = await render('index.html');
//   context.body = html;
// });

// home.get('/index.html', async context => {
//   let html = await render('index.html');
//   context.body = html;
// });

// app.use(async (context) => {
//   let { query, querystring } = context.request;

// });

// app.use(home.routes()).use(home.allowedMethods())
// app.listen(4000);

// const Koa = require('koa')
// const app = new Koa()
// const bodyParser = require('koa-bodyparser')
//
// // 使用ctx.body解析中间件
// app.use(bodyParser())
//
// app.use(async (ctx) => {
//
//   if (ctx.url === '/' && ctx.method === 'GET') {
//     // 当GET请求时候返回表单页面
//     let html = `
//       <h1>koa2 request post demo</h1>
//       <form method="POST" action="/">
//         <p>userName</p>
//         <input name="userName" /><br/>
//         <p>nickName</p>
//         <input name="nickName" /><br/>
//         <p>email</p>
//         <input name="email" /><br/>
//         <button type="submit">submit</button>
//       </form>
//     `
//     ctx.body = html
//   } else if (ctx.url === '/' && ctx.method === 'POST') {
//     // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
//     let postData = ctx.request.body
//     ctx.body = postData
//   } else {
//     // 其他请求显示404
//     ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//   }
// })
//
// app.listen(4000, () => {
//   console.log('[demo] request post is starting at port 3000')
// })
//

// const Koa = require('koa');
// const app = new Koa();
// const fs = require('fs');
// const path = require('path');
// const Router = require('koa-router');
// const staticss = require('koa-static');
// const proxy = require('koa-better-http-proxy');
// const route = new Router();
// app.use(proxy('http://172.16.1.94', {
//   port: 8089,
//   filter: (ctx) => {
//     return ctx.request.url.startsWith('/request');
//   }
// }));
// // app.use(proxy({
// //   proxy_rules: [
// //     {
// //       proxy_location:  /^\/v(?:0|1)/,
// //       proxy_pass: 'http://172.16.1.94:8089/',
// //       proxy_micro_service: false,
// //       proxy_merge_mode: false
// //     }
// //   ]
// // }));
//
// // 静态资源目录对于相对入口文件index.js的路径
// app.use(staticss(
//   path.join(__dirname, '../lbank/dist')
// ));
//
// const createPage = async (ctx, next, name) => {
//   // const { url } = ctx.request;
//   let viewUrl = `./view/${name}`;
//
//   ctx.body = await new Promise((resolve, reject) => {
//     fs.readFile(viewUrl, 'binary', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data);
//       }
//     })
//   });
//
//   await next();
// };
//
// // 子路由2
// route
//   .get('/', async (ctx, next) => {
//     await createPage(ctx, next, 'index.html');
//   })
//   .get('/activities', async (ctx, next) => {
//     await createPage(ctx, next, 'activities.html');
//   })
//   .get('/404', async (ctx, next) => {
//     await createPage(ctx, next, 'error-notfound.html');
//   });
//
//
// app.use(route.routes());
//
// app.listen(4000);
