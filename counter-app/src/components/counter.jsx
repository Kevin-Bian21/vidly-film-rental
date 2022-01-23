import React, { Component } from "react";

class Counter extends Component {
  // props是我们给组件的数据，是只读属性；state是组件本地的私有的数据容器，其他组件不能访问该state。
  // state = {
  //   count: this.props.counter.value,
  //   imageUrl: "Https://picsum.photos/10",
  //   tags: ["a", "b", "c"],
  // };

  //将handlerIncrement中的this调用对象绑定到当前类对象
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //使用箭头函数可以继承this的关系，就可以不用constructor来bind

  render() {
    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">增加</button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">删除</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
