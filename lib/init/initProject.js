const path = require('path')
const fs = require('fs')

function setField(rl, k, v) {
  rl.setPrompt(`${k}: (${v}) `)
  rl.prompt()
}

function getUser() {
  var exec = require('child_process').execSync
  var name, email
  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
  } catch (e) {}
  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (' <' + email.toString().trim() + '>')
  return (name || '') + (email || '')
}

function changeField(json, pathname) {
  json.name = pathname.split(path.sep).pop()
  json.version = '1.0.0'
  json.description = ''
  json.author = getUser()
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
        resolve('\n init template Success!')
        rl.close()
      }
    })
  })
}