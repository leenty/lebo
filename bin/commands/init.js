const Init = require('../../lib/init')

module.exports = function (program) {
  program
    .command('init <name>')
    .alias('i')
    .description('download and init blog template')
    .action(command => {
      const spinner = require('../../lib/spinner')
      spinner('downloading template', Init.download(command))
        .then(() => Init.initProject(command))
        .then(console.log)
        .catch(() => {})
    })
}