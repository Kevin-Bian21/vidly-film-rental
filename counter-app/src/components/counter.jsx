import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 1,
        imageUrl:'Https://picsum.photos/10',
        tags : ['a','b','c']
    };
    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt='图片'/>
                <span style={{fontSize:15}} className={this.getBadgeClasses()}>{this.state.count}</span>
                <button className='btn btn-secondary btn-sm'>增加</button>
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