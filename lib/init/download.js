const download = require('download-git-repo')

module.exports = function (path) {
  return new Promise((resolve, reject) => {
    download(
      'leenty/vue2',
      path,
      function (err) {
        err
          ? reject('downloading template Error')
          : resolve('downloading template Success')
      }
    )
  })
}