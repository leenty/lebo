# lebo
[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![node version][node-image]][node-url]
[![npm license][license-image]][download-url]

[vue2博客](https://github.com/leenty/vue2)命令行工具包

### 安装
```sh
npm i -g lebo
```

### 模板
> 获取模板
```sh
git clone git@github.com:leenty/vue2.git
```
> 安装依赖
```sh
npm i
```
> 开启
```sh
npm run dev
```
> 编译打包
```sh
lebo article -r && npm run build
```

### 命令
> 使用`lebo -h`查看帮助
```sh
  Usage: lebo <command> [options]

  Commands:

    article [options]   create article and generate article's route

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### 子命令article
> 使用`lebo article -h`查看子命令`article`的帮助
```sh
  Usage: article [options]

  create article and generate article's route

  Options:

    -h, --help              output usage information
    -r, --render            generate article's route
    -c, --create <article>  create a article named <article>
    -m, --mkdir             create articles directory
```
> 创建文章目录: `lebo article -m`

> 创建文章: `lebo article -c <article>`

栗子：
```sh
# 输入
lebo article -c test

# 输出
新建文章《test》
路径: /Users/leenty/dev/vue2/src/md/articles/test.md
```

> 创建文章路由: `lebo article -r`

栗子：
```sh
# 输入
lebo article -r

# 输出
文章路由生成完毕！ 
文章列表生成完毕！ 
预渲染路由生成完毕！
```



[npm-image]: https://img.shields.io/npm/v/lebo.svg?style=flat
[npm-url]: https://npmjs.org/package/lebo
[node-image]: https://img.shields.io/badge/node.js-%3E=_7.6-green.svg?style=flat
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dt/lebo.svg?style=flat
[download-url]: https://npmjs.org/package/lebo
[license-image]: https://img.shields.io/npm/l/lebo.svg
