/**
 * Created by monty.ma on 2018/6/28.
 */
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');

module.exports = {
  async index(ctx) {
    await ctx.render('signup', {
      desc: '欢迎注册',
      title: '注册页'
    });
  },
  async signUp(ctx) {
    // 生成salt
    const salt = await bcrypt.genSalt(10);
    console.log(ctx.request.body, 'ctx.request.body');
    let {name, email, password} = ctx.request.body;
    // TODO 合法性校验
    // 对密码进行加密
    password = await bcrypt.hash(password, salt);
    const user = {
      name,
      email,
      password
    };
    // 储存到数据库
    let result;
    try {
      result = await UserModel.create(user);
    } catch (error) {
      console.log(error, 'error');
      result = error;
    }
    ctx.body = result;
  }
};