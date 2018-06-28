/**
 * Created by monty.ma on 2018/6/28.
 */

module.exports = {
  async about(ctx) {
    await ctx.render('about', {
      title: '关于',
      desc: 'Welcome to About'
    });
  }
};