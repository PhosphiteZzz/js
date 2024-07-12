## SPA单页应用程序
#### 优点
###### 1、良好的交互体验：由于页面内容的变化不需要重新加载整个页面，因此具有更快的响应速度，提供了类似桌面应用的即时性和网站的可移植性、可访问性。
###### 2、前后端分离
###### 3、减轻服务端压力：服务端不需要处理页面模板的逻辑与拼接，除首次加载页面外只需要提供数据信息即可，把计算尽量放在客户端，单页应用能提高单位服务器的负载量
###### 4、可维护性高：通常采用组件化与模块化开发，代码复用程度高，相对来说可维护性高。
#### 缺点
###### 1、不利于SEO：由于是采用前端渲染的方式，搜索引擎不会去解析Js从而只能够抓取首页未渲染的模板，如果需要单页面应用有更好的SEO，那么通常需要使用SSR（服务端渲染）。搜索引擎爬虫抓取工具可以直接查看完全渲染的页面，但由于是服务端进行渲染，那么会对服务器造成一定压力。
###### 2、首次加载速度慢：SPA单页应用通常首次加载页面时就会将相应的HTML、JavaScript、CSS文件全部加载，通常可以通过采取缓存措施以及懒加载即按需加载组件的方式来优化。
###### 3、页面复杂度提高：后端只提供数据而不再管前端的展示逻辑和页面合成，所以这些展示逻辑和页面合成都需要在前端进行编写，会大大提高页面的复杂性和逻辑的难度。



## SEO（搜索引擎优化）
###### 利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。很大程度上是网站经营者的一种商业行为，将自己或自己公司的排名前移。https://blog.csdn.net/ACCPluzhiqi/article/details/131702034



## SSR（服务器端渲染）
##### 在Web前端开发中，SSR通常指的是服务器端渲染（Server-Side Rendering）。这是一种构建Web应用程序的方法，页面的HTML内容在服务器端生成，然后发送到客户端（浏览器）。与客户端渲染（Client-Side Rendering, CSR）相比，SSR具有一些独特的优势和挑战。

##### 一、SSR的优势
+ SEO友好：搜索引擎优化（SEO）更容易实现，因为搜索引擎爬虫可以直接索引服务器生成的完整HTML内容。
+ 更快的首屏加载时间：用户可以更快地看到页面的首屏内容，因为不需要等待所有的JavaScript都下载并执行完毕。
+ 更好的性能：对于性能较差或网络连接较慢的设备，服务器端渲染可以提供更快的加载时间。
+ 减轻客户端负担：对于资源受限的设备，服务器端渲染可以减少客户端JavaScript的解析和执行负担。

##### 二、SSR的缺点
+ 更高的服务器负载：SSR需要在服务器端执行渲染逻辑，这会增加服务器的计算和内存资源消耗，特别是当大量用户同时访问时。
+ 更复杂的架构：实现SSR需要在服务器端集成更多的前端逻辑，增加了项目复杂性，可能需要维护服务器端和客户端两套渲染代码。
+ 延迟交互：虽然首屏加载速度快，但后续页面交互和动态更新通常依赖JavaScript，这意味着用户可能需要等待脚本执行才能进行交互，这可能会降低用户体验。
+ 额外的网络开销：服务器需要发送完整渲染的HTML页面，页面大小可能比纯静态HTML更大，导致更大的数据传输量。
+ 不利于迭代和更新：对于频繁更新的前端应用，服务端的更新部署可能需要更加谨慎，以防止影响整个应用的稳定性。
+ 调试难度：由于部分渲染逻辑发生在服务器端，调试可能变得更加复杂，需要在服务器环境中重现问题。
+ 安全风险：将更多业务逻辑放在服务器端可能增加暴露敏感信息或遭受攻击的风险。
+ 开发成本：需要投入更多时间和资源来实现和优化SSR，包括处理状态管理、路由同步等问题。

##### 三、SSR的实现方式
+ 基于模板引擎的早期SSR：使用如PHP、JSP等模板引擎生成静态HTML页面。
+ 客户端渲染（CSR）：基于SPA（单页应用）框架，在客户端进行动态渲染。这种方式首屏加载速度较慢，SEO较差，但页面跳转体验较好，服务器压力较低
+ 同构SSR：基于同一套代码在服务端和客户端都能执行的特点实现。首次访问页面为SSR，后续交互为SPA的体验。这种方式首屏速度快，SEO好，但服务器压力较高
+ React SSR：使用React框架的虚拟DOM和react-dom/server将React组件转换为HTML字符串。在客户端，使用hydrateRoot替代render进行水合，通过双端对比机制更新DOM，使客户端渲染结果与服务端渲染一致
+ 流式渲染：通过renderToPipeableStream将React组件树渲染为Node.js流，实现渐进式传输。这种方式可以在渲染过程中传输内容，而不需要等待整个DOM树渲染完成。
+ 路由同构：使用如react-router-dom提供的服务端和浏览器端API，如StaticRouter，实现服务端和客户端的路由匹配和渲染。
+ Node.js SSR示例：使用Node.js的http模块和模板引擎（如EJS）在服务器端渲染React组件，并发送完整的HTML页面给客户端。
+ Vue SSR：Vue框架也支持SSR（Nuxt.js），其实现方式与React类似，也是在服务端渲染Vue组件为HTML，然后发送给客户端。
+ Next.js：Next.js是一个基于React的框架，它简化了SSR的实现，通过export特定的函数来启用服务器端渲染。

## nrm是什么？
##### nrm(npm registry manager，nrm )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换。
##### nrm全局安装
<code>npm install -g nrm</code>

##### nrm常用指令
###### 1、查看可选择源列表 
<code>nrm ls</code>

###### 2、切换源
<code>nrm use \<registry></code>

###### 3、添加源
<code>nrm add \<registry> \<url></code>

###### 4、删除源
<code>nrm del \<registry> </code>

###### 5、测试相应源的响应时间
<code>nrm test \<registry> </code>

## nvm是什么？
##### Node Version Manager（NVM） 是一种用于管理多个主动节点.js版本的工具。

##### 例如：在工作中，可能需要同时进行2个或者多个不同项目的开发，每个项目的需求不同，如果不同项目需要依赖不同版本的NodeJS运行环境。那么，在这种情况下对于维护多个版本的Nodejs将会是一件非常麻烦的事情，nvm就是为解决这个问题而产生的，它能够在同一台设备上切换不同的Nodejs版本，解决了适应项目运行环境的问题。

## 全面理解JS模块的标准（AMD、CMD、COMMON.JS 、 UMD、ESM）
##### 在前端的世界演变里，有着几种JS的模块规范，从出现的顺序来说就是：

①amd
②cmd
③common.js
④ umd
⑤ esm

现在Vue框架里面都是遵守esm规范，不得不说esm是目前最好最流行的一种js规范了

###### 一、amd - 浏览器中的js模块化解决方案
###### AMD 全称是 Async Module Definition -中文： 异步模块化定义
核心是通过define方法对无序的代码进行有序的模块化定义，通过require方法实现代码的模块化加载
1、通过define方法定义模块

    define([
      'temp',
    ], function() {
      const text = 'hello world';
      return text;
    });
2、通过require方法加载模块（异步加载）
注意：参数里面有define声明的模块

    require(['temp'], function (){
      ~~~~
    });

###### 二、cmd - 类似amd的用于浏览器中的js模块规范
###### CMD 全称是 Common Module Definition -中文： 通用模块化定义
<code>sea.js是CMD模块规范的一个具体实现 Sea.js 文档</code>
在定义模块方面, CMD和AMD一样通过define函数来定义模块; 两者的主要区别在于对依赖的加载上, CMD中不需要在define的参数中直接声明需要用到的模块

1、通过define方法定义模块
calculator.js

    define('calculator', function(require, exports) {
        // 通过require方法加载其他模块
        var math = require('math');
        exports.add = function(left, right) { return math.add(left, right) };
        exports.subtract = function(left, right) { 
          return math.subtract(left, right) 
        };
    })
可以看到calculator模块所的依赖的math模块没有在define函数的参数中进行声明, 而是通过require(‘math’)来引入的

2、使用calculator模块

    seajs.use(['calculator'], function(calculator) {
        console.log('1 + 1 = ' + calculator.add(1, 1));
        console.log('2 - 2 = ' + calculator.subtract(2, 1));
    })

###### 三、common.js -Node中使用的模块规范
<code>
通过exports和module.exports来暴露模块中的内容。
通过require来加载模块。
</code>

###### 1、通过exports 暴露模块接口 

###### study.js
    var hello = function () {
        console.log('hello studygd.com.');
    }
    exports.hello = hello;

###### main.js
    const studygd = require('./study');
    studygd.hello();

###### 2、通过module.exports 暴露模块接口
###### math.js
    module.exports = {
        add: function(left, right) {
            return left + right;
        },
        subtract: function(left, right) {
            return left - right;
        }
    }
###### 使用刚才定义的math模块, 并再定义一个calculator模块
###### calculator.js
    const math = require('./math.js');
    module.exports = {
        add: math.add
    }

###### 五、esm - ES6模块规范
<code>
使用import导入模块，通过export导出模块
</code>

###### math.js
    export { add: (left, right) => left + right; }
###### 在calculator.js导入
    import { add } from './math.js';
    
    console.log('1 + 1 = ' + add(1, 1));