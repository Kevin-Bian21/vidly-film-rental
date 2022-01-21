import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 1,
        imageUrl:'Https://picsum.photos/10',
        tags : ['a','b','c']
    };

    //将handlerIncrement中的this调用对象绑定到当前类对象
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //使用箭头函数可以继承this的关系，就可以不用constructor来bind
    handleIncrement = () => {
        console.log(this);
    }
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt='图片'/>
                <span style={{fontSize:15}} className={this.getBadgeClasses()}>{this.state.count}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>增加</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;