const path = require('path')

module.exports = function (pathname) {
  return new Promise((resolve, reject) => {
    console.log(process.env.PWD)
    console.log(pathname)
    console.log(path.join(process.env.PWD, pathname, 'package.json'))
    setTimeout(() => {
      resolve('success')
    }, 3000)
  })
}