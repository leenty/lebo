const path = require('path')
const fs = require("fs")
const dir = require("./dir")

const relativePath = './src/md/articles/'
const dirname = process.env.PWD

Date.prototype.format = function(fmt) {
  let o = {   
    "M+" : this.getMonth()+1,
    "d+" : this.getDate(),
    "h+" : this.getHours(),
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(),
    "q+" : Math.floor((this.getMonth()+3)/3),
    "S"  : this.getMilliseconds()
  }
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length))
  for(let k in o)
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1)
    ? (o[k])
    : (("00"+ o[k]).substr((""+ o[k]).length)))
  return fmt
}

function setAritcleInfo (name) {
  const date = new Date().format("yyyy/MM/dd")
  return '<!--{'
    +       `\n"title": "${name}",`
    +       `\n"date": "${date}",`
    +       `\n"tag": "",`
    +       `\n"series": ""`
    +    '\n}-->\n'
}

function writeArticle (name) {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string' || typeof name === 'number') {
      const articlePath = path.join(dirname, `${relativePath}${name}.md`)
      fs.stat(articlePath, (err, stat) => {
        err || reject(`${articlePath} 已存在！`)
        fs.writeFile(articlePath, setAritcleInfo(name), err => {
          err && reject(dir.warning())
          resolve(`新建文章《${name}》\n路径: ${articlePath}`)
        })
      })
    } else {
      reject(
        `错误的文件名 ${name}` +
        `\n请使用：` +
        `\n    lebo article -c <article>` +
        `创建文章`
      )
    }
  })
}

module.exports = {
  create: writeArticle
}