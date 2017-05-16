const fs = require('fs')
const path = require('path')

let modulesLoader = function (filePath) {
  var modules = {}
  var loadPath = path.dirname(filePath)

  fs.readdirSync(loadPath).filter(function (filename) {
    return (/\.js$/.test(filename) && filename !== 'index.js')
  }).forEach(function (filename) {
    var name = filename.substr(0, filename.lastIndexOf('.'))

    // Require module
    modules[name] = require(path.join(loadPath, filename))
  })

  return modules
}

module.exports = modulesLoader