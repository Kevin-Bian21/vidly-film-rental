import Counters from './components/counters';
import Navbar from './components/navbar';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value --;
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
      <div className="App">
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
          <main className='container'>
            <Counters
              counters = {this.state.counters}
              onDelete = {this.handleDelete}
              onReset = {this.handleReset}
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
            />
          </main>
      </div>
    );
  }
}

export default App;
