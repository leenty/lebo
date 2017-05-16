const Init = require('../../lib/init')

module.exports = function (program) {
  program
    .command('init <name>')
    .description('download and init blog template')
    .action(command => {
      // const repl = require('repl');
      // // 一个 Unix 风格的提示符
      // repl.start('$ ');
      
      const spinner = require('../../lib/spinner')
      spinner('downloading template', Init.download(command))
        .then(() => spinner('changing template', Init.initProject(command)))
        .catch(() => {})

      // spinner('downloading template', Init.initProject(command))
      //   .catch(() => {})
    })
}