import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters : [
            { id : 1, value : 0 },
            { id : 2, value : 1 },
            { id : 3, value : 0 },
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState({ counters : counters });
    }
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value ++;
        this.setState({ counters });
    };
    handleReset = () => {
        //使用map将state中的每个counter对象进行映射，并重置它的value值为0，这样旧的到了一个新的数组
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn m-2">重置</button>
                { this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;