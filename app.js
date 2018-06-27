/**
 * Created by monty on 2018/1/23.
 */
const Koa = require('koa');
const app = new Koa();



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
