var path = require('path')
var mkdirp = require('mkdirp')

const dirname = process.env.PWD
const relativePath = './src/md/articles/'

function createDirectory () {
  return new Promise((resolve, reject) => {
    const dir = path.join(dirname,relativePath)
    mkdirp(dir, err => {
      err && reject('创建目录异常！\n', err)
      resolve(`创建 ${dir} 目录成功`)
    })
  })
}

function directoryWarning () {
  return '\n找不到相应的文章目录，请确保在项目根目录使用此命令。' +
    '\n如项目根目录下没有目录 /src/md/' + 
    '\n请使用 lebo article -m 创建目录！'
}

module.exports = {
  create: createDirectory,
  warning: directoryWarning
}
