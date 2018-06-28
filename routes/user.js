/**
 * Created by monty.ma on 2018/6/28.
 */
const UserModel = require('../models/user');

module.exports = {
  async signUp(ctx) {
    const userInfo = {
      name: 'Monty21',
      email: 'montyma120722@gmail.com',
      password: 'abcd12345'
    };

    const result = await UserModel.create(userInfo);
    ctx.body = result;
  }
};