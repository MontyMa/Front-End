/**
 * Created by monty.ma on 2018/6/28.
 */

module.exports = {
  async index(ctx) {
    await ctx.render('index', {
      title: 'shouye',
      desc: 'Wellcome'
    });
  }
};