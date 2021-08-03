# 笔记本显示跟PC显示比例为125%、150%对页面造成的影响
## 关键语法  document.getElementsByTagName('body')[0].style.zoom = 1 / window.devicePixelRatio;
## 通过修改body zoom修改大小显示
### 注意：zoom在非IE浏览器中表现为支持放大或者缩小，但是由于这个属性是一个不标准的css属性，因此一般在非IE浏览器中不用zoom来实现div 的缩放效果
### (webkit内核浏览器支持)
### 使用方法  new DevicePixelRatio（）.init();