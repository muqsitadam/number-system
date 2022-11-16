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
        <div className="text-2xl flex sm:flex-row flex-col-reverse justify-center items-center bg-neutral-200 w-full lg:w-1/2 2xl:w-1/3 m-auto mt-10 rounded-xl">
        <button className='hover:text-3xl p-5 m-10 rounded-xl text-white bg-red-700 font-mono' onClick={this.decrementNumber}>Reduce count</button>
        <p className='px-10 py-5 border-2 rounded-xl border-black'>{this.state.number}</p>
        <button className='hover:text-3xl p-5 m-10 rounded-xl text-white bg-green-700 font-mono' onClick={this.incrementNumber}>Increase count</button>
        </div>
      </div>
      
    );
  }
}
export default App;
