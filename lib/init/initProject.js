const path = require('path')
const fs = require('fs')

function setField(rl, k, v) {
  rl.setPrompt(`${k}: (${v}) `)
  rl.prompt()
}

function changeField(json, pathname) {
  json.name = pathname.split(path.sep).pop()
  json.version = '1.0.0'
  json.description = ''
  json.author = 'leenty'
  return json
}

module.exports = function (pathname) {
  return new Promise((resolve, reject) => {
    const readline = require('readline')
    const filePath = path.join(process.env.PWD, pathname, 'package.json')
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    json = changeField(json, pathname)
    const keys = ['name', 'version', 'description', 'author']
    let index = 0
    setField(rl, keys[index], json[keys[index]])
    rl.on('line', line => {
      json[keys[index]] = line || json[keys[index]]
      index ++
      if (index < keys.length) {
        setField(rl, keys[index], json[keys[index]])
      } else {
        fs.writeFileSync(filePath, JSON.stringify(json, null, '  '))
        resolve(json)
        rl.close()
      }
    })
  })
}