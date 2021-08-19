#详解mixins混入使用

## 前言
<br />
当我们的项目越来越大，我们会发现组件之间可能存在很多相似的功能，你在一遍又一遍的复制粘贴相同的代码段（data，method，watch、mounted等），如果我们在每个组件中去重复定义这些属性和方法会使得项目出现代码冗余并提高了维护难度，针对这种情况官方提供了Mixins特性

##一、什么是Mixins？   
<br />
mixins（混入），官方的描述是一种分发 Vue 组件中可复用功能的非常灵活的方式，mixins是一个js对象，它可以包含我们组件中script项中的任意功能选项，如data、components、methods 、created、computed等等。我们只要将共用的功能以对象的方式传入 mixins选项中，当组件使用 mixins对象时所有mixins对象的选项都将被混入该组件本身的选项中来，这样就可以提高代码的重用性，使你的代码保持干净和易于维护。

##二、什么时候使用Mixins？
<br />
当我们存在多个组件中的数据或者功能很相近时，我们就可以利用mixins将公共部分提取出来，通过 mixins封装的函数，组件调用他们是不会改变函数作用域外部的。

##三、如何创建Mixins？
<br />
在src目录下创建一个mixins文件夹，文件夹下新建一个myMixins.js文件。前面我们说了mixins是一个js对象，所以应该以对象的形式来定义myMixins，在对象中我们可以和vue组件一样来定义我们的data、components、methods 、created、computed等属性，并通过export导出该对象
<br />
``` javascript
export const myMixins = {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
}
```

## 四、如何使用Mixins？
<br/>
``` js
import { myMixins } from "./mixins";
export default {
  mixins: [myMixins],
}
```
<br/>
## 五、Mixins的特点

#### 方法和参数在各组件中不共享，虽然组件调用了mixins并将其属性合并到自身组件中来了，但是其属性只会被当前组件所识别并不会被共享，也就是其他组件无法从当前组件中获取到mixins中的数据和方法。
<br/>
①首先我们在混合对象myMixins.js中定义一个age字段和getAge方法
``` js
export const myMixins = {
  components: {},
  data() {
    return {
      age: 18
    }
  },
  created() { },
  mounted() {
    this.getAge();
  },
  computed: {},
  methods: {
    getAge() {
      console.log("年龄是", this.age);
    }
  }
}
```
② 组件1中对num进行+1操作

``` js
import { myMixins } from "./mixins";
export default {
  mixins: [myMixins],
  data() {
    return {};
  },
  created() {
    this.age++;
  },
  mounted() {},
  methods: {},
  components: {},
};
```
③组件2不进行操作
``` js
import { myMixins } from "./mixins";
export default {
  mixins: [myMixins],
  data() {
    return {};
  }
}
```
④我们分别切换到两个页面，查看控制台输出。会发现组件1改变了age里面的值，组件2中age值还是混合对象的初始值，并没有随着组件1的增加而改变


































