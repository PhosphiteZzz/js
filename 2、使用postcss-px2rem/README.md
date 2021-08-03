## 使用postcss-px2rem
### 第一步：安装postcss-px2rem
<code> cnpm install postcss-px2rem px2rem-loader --save</code>
### 第二步：在 vue.config.js 中添加配置

```
const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}
```
### 第三步：添加 rem.js文件
建议在src下新建config文件夹，在文件夹中新建rem.js文件
```
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
}
```
### 第四步：引入rem.js文件
可通过两种方法引入：
* 方法一：直接在public/index.html 中引入js文件
<code> ```<script src="../src/config/rem.js"></script>```</code>
* 方法二：在main.js中导入js文件
<code>```import './config/rem'  //px转rem```</code>
### 第五步 重启服务
<code>npm run serve/dev</code>