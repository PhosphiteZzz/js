https://www.jianshu.com/p/361784d10179

### 安装依赖包，注意save-dev和save区别
```
npm install --save-dev @vue/cli-plugin-babel @babel/preset-env
npm install --save @babel/polyfill current-script-polyfill
```
### 在main.js文件第一行插入如下脚本
```
import 'current-script-polyfill'
```
### 正常基于vue-cli的工程的package.json中有如下代码片段，如果没有，请手动添加
```
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie < 11"
  ]
```
### 如果是单页工程，在工程根路径下添加babel.config.js配置文件，内容如下：
```
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```

```
// vue.config.js
module.exports = {
  transpileDependencies: true //或者['vue-json-excel']
}
```
### 重启应用，兼容性正常都能解决。如果还不能解决（我就是这样，头都大了，都怀疑这个方案是否是正解），就得寻找项目中的依赖包是否需要从es6转换为es5（这是一个思路，但是对于一个庞大的工程而言，找到这个依赖包谈何容易，有时候就是运气）。