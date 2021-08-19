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

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/5%E3%80%81vue%20mixins%E6%B7%B7%E5%85%A5/1.png)

引入mixins后组件会对其进行合并，将mixins中的数据和方法拓展到当前组件中来，在合并的过程中会出现冲突，接下来我们详细了解Mixins合并冲突
<br/>
## 六、Mixins合并冲突
### 值为对象(components、methods 、computed、data)的选项，混入组件时选项会被合并，键冲突时优先组件，组件中的键会覆盖混入对象的
<br/>
①我们在混入对象增加age属性、getAge1方法和getAge2方法
``` js
export const myMixins = {
  components: {},
  data() {
    return {
      age: 18
    }
  },
  methods:{
    getAge1(){
      console.log('js age1', this.age);
    }
  }
}
```
②我们在引入了myMixins文件的组件中，增加age属性、getAge1方法
``` js
import { myMixins } from "./mixins";
export default {
  mixins: [myMixins],
  data() {
    return {};
  },
  mounted() {
    this.getAge1();
  },
  methods: {
    getAge1(){
        console.log("vue ",this.age)
    }
  },
  components: {},
};
```
③我们会发现，组件中的age覆盖了混合对象的age，组件的getAge1方法覆盖了混合对象的getAge1方法
![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/5%E3%80%81vue%20mixins%E6%B7%B7%E5%85%A5/2.png)

### 值为函数(created、mounted)的选项，混入组件时选项会被合并调用，混合对象里的钩子函数在组件里的钩子函数之前调用
``` js

export const myMixins = {
  components:{},
  data() {
    return {}
  },
  created() {
    console.log('xxx from mixins')
  }
}
``` 
``` js

import { myMixins } from "@/mixins/myMixins.js";
export default {
  mixins: [myMixins],
  data() {
    return {}
  },
  created() {
    console.log('xxx from template')
  }
}
```
![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/5%E3%80%81vue%20mixins%E6%B7%B7%E5%85%A5/3.png)

## 七、与vuex的区别
<br/>
#### vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。

#### Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
<br/>
## 八、与公共组件的区别
<br/>
#### 组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。

#### Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。
















