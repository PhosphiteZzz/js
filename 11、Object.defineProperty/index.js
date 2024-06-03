const obj = {
  name: 'demo',
  age: 10,
};

Object.defineProperty(obj,'key',{
  value:12,
  writable:false,//不能重新赋值
  configurable:false,//不能重新配置。不可删除
  enumerable:false//不能被遍历
})

obj.key = 100;
// console.log(obj) // 12，writable为false，值无法更改

// TypeError 上面configurable为false，不能再次更改属性的配置
// Object.defineProperty(obj, 'key', {
//   value: 123,
//   writable: true,
//   configurable: true,
//   enumerable: true,
// })

// TypeError 上面已经出现过数据描述符，这里不能再出现存取描述符
// Object.defineProperty(obj, 'key', {
//   set: (value) => {
//     this.key = `value=${value}`
//   },
//   get: () => {
//     return this.key
//   },



//   writable: false,
// })

let person = {};
Object.defineProperty(person,'key',{
  get:()=>{
    return '22'
  },
  set:(val)=>{
    console.log(val)
  }
})
person.key = 'Jack';
// console.log(person.key);