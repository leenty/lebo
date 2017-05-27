const Article = require('../../lib/article')

module.exports = function (program) {
  program
    .command('article')
    .alias('a')
    .description('create article and generate article\'s route')
    .option('-r, --render', 'generate article\'s route')
    .option('-c, --create <article>', 'create a article named <article>')
    .option('-m, --mkdir', 'create articles directory')
    .action(function (command) {
      command.mkdir &&
        Article.dir.create()
          .then(console.log)
          .catch(console.log)
      command.create &&
        Article.article.create(command.create)
          .then(console.log)
          .catch(console.log)
      command.render &&
        Article.router.create()
          .then(info => console.log(...info))
          .catch(err => console.log(...err))
    })
}