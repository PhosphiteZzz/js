我们知道 JS 有对象，比如

<code>var obj = { name: 'obj' }</code> 

我们可以对 obj 进行一些操作，包括

* 「读」属性
* 「新增」属性
* 「更新」属性
* 「删除」属性

下面我们主要来看一下「读」和「新增」属性。

##为什么有 valueOf / toString 属性呢？               

在我们没有对 obj 进行任何其他操作之前，发现 obj 已经有几个属性（方法）了：

![mahua](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/1.png)

## 那么问题来了：valueOf / toString / constructor 是怎么来？我们并没有给 obj.valueOf 赋值呀。

要搞清楚 valueOf / toString / constructor 是怎么来的，就要用到 console.dir 了。






