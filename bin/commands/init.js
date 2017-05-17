const Init = require('../../lib/init')

module.exports = function (program) {
  program
    .command('init <name>')
    .description('download and init blog template')
    .action(command => {
      const spinner = require('../../lib/spinner')
      // spinner('downloading template', Init.download(command))
      //   .then(() => spinner('changing template', Init.initProject(command)))
      //   .catch(() => {})

      Init.initProject(command)
        .then(console.log)
        .catch(console.log)
      // spinner('downloading template', Init.initProject(command))
      //   .catch(() => {})
    })
}