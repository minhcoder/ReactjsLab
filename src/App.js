import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Main from './component/MainComponent';
import {DISHES} from './share/dishes';

class App extends Component{
  // constructor(props){
  //   super(props);

  //   this.state={
  //     dishes: DISHES,
  //   }
  // }


  render(){
    return (
      <div className="App">
       
        <Main />
      </div>
    )
  }
}

export default App;
