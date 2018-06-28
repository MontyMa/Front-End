/**
 * Created by monty.ma on 2018/6/28.
 */

module.exports = {
  port: process.env.PORT || 4000,
  session: {
    key: 'test',
    maxAge: 86400000,
  },
  mongodb: 'mongodb://localhost:27017/test',
};