/**
 * Created by monty.ma on 2018/6/28.
 */

const router = require('koa-router')();

module.exports = (app) => {
  router.get('/', require('./home').index);
  router.get('/about', require('./about').about);
  router.get('/signUp', require('./user').signUp);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
