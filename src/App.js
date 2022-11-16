import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }

  incrementNumber = () => {
    this.setState({number: this.state.number + 1})
  }

  decrementNumber = () => {
    this.setState({number: this.state.number - 1})
  }

  render(){
    return (
      <div>
        <h1 className='text-3xl text-center mt-10'>Number System</h1>
        <div className="text-2xl flex flex-row justify-center items-center bg-neutral-200 w-1/2 m-auto mt-10 rounded-xl">
        <button className='hover:text-3xl p-10 m-10 font-mono' onClick={this.decrementNumber}>Decrement</button>
        <p className='px-10 py-5 border-2 rounded-xl border-black'>{this.state.number}</p>
        <button className='hover:text-3xl p-10 m-10 font-mono' onClick={this.incrementNumber}>Increment</button>
        </div>
      </div>
      
    );
  }
}
export default App;
