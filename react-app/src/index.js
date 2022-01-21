import React from 'react';
import ReactDOM from 'react-dom';
import { Student } from "./student";
import { Teacher } from './teacher';
// default -> import ... from "";
// Named -> import { ... } from "";

const element = <h1>Hello World</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root'));

const person = {
  name : 'Kevin',
  walk : function() {
    console.log(this);
  },
  talk() {  console.log("his talk loudly!")}
}

person['name'] = 'John';

person.talk();   //调用person中的talk()方法
let t = person.talk;  //获取到person中的talk函数
console.log(t);

person.walk();

const w = person.walk;
w();  //this指向全局对象即 Windows，严格代码模式下，打印 undefined

const walk = person.walk.bind(person);  //使上面walk函数中的console.log中的this指向person
walk();

/*
const square = function (length) {
  return length * length;
}
*/
//使用箭头函数简化上面的代码，如果有一个参数括号可以省略，如果没有参数，使用一个空括号,函数体中只有单挑语句，花括号和 return 也可省略
const square = length => length * length;

const man = {
  talk() {
    setTimeout( function () {  //使用匿名函数
        console.log('this',this);
      }
    , 1000);
  }
}
man.talk(); //匿名函数中的this将不再指代当前的man对象，而是windows对象
//this > Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const man1 = {
  talk() {
    var self = this;
    setTimeout( function () {  //使用匿名函数
        console.log('this',self);
      }
      , 1000);
  }
}
man1.talk();

const man2 = {
  talk() {
    setTimeout(() => {
      console.log('this',this);  //箭头函数不会重新绑定this
    }, 1000);
  }
}
man2.talk();


//使用map映射到一个数组中的每一项到函数中，然后得到一个新的数组
const colors = ['red','green','blue'];
/*
const items = colors.map(function (color) {
  return '<li>' + color + '</li>';
});
*/
const items = colors.map(color => '<li>' + color + '</li>');

//ES6:模板格式
const items1 = colors.map(color => `<li>${color}</li>`);
console.log(colors);
console.log(items);
console.log(items1);


const address = {
  street: '',
  city: '',
  country: ''
};

const street = address.street;
const city = address.city;

//将address中的值取出，并且将street赋值给新变量 st
const {street : st, city : c, country} = address;

//========展开操作:适用于数组和对象==========
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// const array = [arr1.concat(arr2).concat('A')];
const array = [...arr1, 'A', ...arr2, 'B'];
console.log(array);

const first = {name:"Kevin"};
const second = {job:"Student"};
const combined = {...first, ...second, collage:"XUST"};
console.log(combined);

//=======calss========

const student = new Student("Kevin",22);
console.log(student);