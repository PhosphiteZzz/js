# 什么是 JS 原型链？

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

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/1.png)

## 那么问题来了：valueOf / toString / constructor 是怎么来？我们并没有给 obj.valueOf 赋值呀。

要搞清楚 valueOf / toString / constructor 是怎么来的，就要用到 console.dir 了。

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/2.png)

上面这个图有点难懂，我手画一个示意图：

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/3.png)

我们发现 console.dir(obj) 打出来的结果是：

1. obj 本身有一个属性 name（这是我们给它加的）

2. obj 还有一个属性叫做 __proto__（它是一个对象）

3. obj.__proto__ 有很多属性，包括 valueOf、toString、constructor 等

4. obj.__proto__ 其实也有一个叫做 __proto__ 的属性（console.log 没有显示），值为 null

现在回到我们的问题：obj 为什么会拥有 valueOf / toString / constructor 这几个属性？

答案：

这跟 __proto__ 有关。

当我们「读取」 obj.toString 时，JS 引擎会做下面的事情：

1. 看看 obj 对象本身有没有 toString 属性。没有就走到下一步。

2. 看看 obj.__proto__ 对象有没有 toString 属性，发现 obj.__proto__ 有 toString 属性，于是找到了

所以 obj.toString 实际上就是第 2 步中找到的 obj.__proto__.toString。

可以想象，

3. 如果 obj.__proto__ 没有，那么浏览器会继续查看 obj.__proto__.__proto__

4. 如果 obj.__proto__.__proto__ 也没有，那么浏览器会继续查看 obj.__proto__.__proto__.proto__

5. 直到找到 toString 或者 __proto__ 为 null。

上面的过程，就是「读」属性的「搜索过程」。

而这个「搜索过程」，是连着由 __proto__ 组成的链子一直走的。

### 这个链子，就叫做「原型链」。(每个对象都有原型，当访问这个变量的时候，这个变量不存在就访问他的原型，就这样一直循环下去就产生了原型链！)

## 共享原型链

现在我们有另一个对象

<code>var obj2 = { name: 'obj2' }</code>

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/4.png)

那么 obj.toString 和 obj2.toString 其实是同一个东西，也就是 obj2.__proto__.toString。

这有什么意义呢？

如果我们改写 obj2.__proto__.toString，那么 obj.toString 其实也会变！

这样 obj 和 obj2 就是具有某些相同行为的对象，这就是意义所在。

## 差异化

如果我们想让 obj.toString 和 obj2.toString 的行为不同怎么做呢？

直接赋值就好了：

<code>obj.toString = function(){ return '新的 toString 方法' }</code>

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/5.png)

##总结：

「读」属性时<strong>会</strong>沿着原型链搜索。

「新增」属性时<strong>不会</strong>去看原型链

![pic](https://raw.githubusercontent.com/PhosphiteZzz/js/main/4%E3%80%81js%E5%8E%9F%E5%9E%8B%E9%93%BE/6.png)
