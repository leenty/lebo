const ora = require('ora')

module.exports = function (optsOrText, action) {
  const opts = typeof optsOrText === 'string'
    ? {
      text: optsOrText,
      spinner: 'pong'
    }
    : optsOrText
  let spinner = ora(opts)
  spinner.start()
  action
    .then(done => {
      spinner.succeed(done)
    })
    .catch(err => {
      spinner.fail(err)
    })
  return action
}