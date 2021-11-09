import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../share/dishes';

class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      dishes: DISHES,
      selectedDish: null,
    }
  }
  onDishSelected(dishId){
    this.setState({selectedDish: dishId})
}


  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand >Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        selectedDish={this.state.selectedDish}
        onClickTest={(dishId)=>this.onDishSelected(dishId)}
        />
      </div>
    )
  }
}

export default Main;
