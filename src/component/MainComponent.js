import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import {DISHES} from '../share/dishes';
import { COMMENTS } from '../share/comments';
import { LEADERS } from '../share/leaders';
import { PROMOTIONS } from '../share/promotions';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route,Switch,Redirect} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    }
  }

  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      )
  
    }    

    const DishWithId=({match})=>{
      console.log(this.state.dishes)
      const checkDish = match && match.params && match.params.dishId
      console.log('match', checkDish)
      return(
        <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))[0]}
        comment={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}

      />
      )
      }
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path ='/home' component={HomePage}/>
          <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route exact path='/menu/:dishId' component={DishWithId}/>
          <Route exact path='/contactus' component={Contact}/>
          <Route exact path='/about' component={About}/>
          
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default Main;
