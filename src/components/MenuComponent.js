
import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        // stores iproperties of this component
        this.state = {
            selectedDish: null
        };

        console.log('Menu component constructed');
        
    }

    onDishSelect(dish){

        this.setState({
            selectedDish: dish
        });

    }



    render(){
        console.log('renders menu component');
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card onClick={ () => this.onDishSelect( dish ) } >

                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardImgOverlay>
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>

                <DishDetail dish={this.state.selectedDish} />
                

            </div>
        );
    }

    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked');
        
    }
}
export default Menu;


















// import React, {Component} from 'react';
// import {Card, CardBody,CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';
// import Dishdetail from './DishdetailComponent';

// class Menu extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             selectedDish:null,
//     }
// }
// onDishSelect(dish){
//     this.setState({selectedDish:dish})
// }

//     render(){
//         const menu = this.props.dishes.map((dish)=>{
//             return(
//              <div className="col-12 col-md-5 m-1">
//                  <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
//                      <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                      <CardImgOverlay>
//                          <CardTitle>{dish.name}</CardTitle>
//                      </CardImgOverlay>

//                  </Card>

//              </div>
//             )
//         })
//         return (
//             <div className="container">
//                 <div className="row">
//                         {menu}
//                 </div>
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         <Dishdetail dish={this.state.selectedDish}/>
//                     </div>
//                 </div>
//                 <div>  
//                 </div>
//             </div>
//         )
//     }
// }
// export default Menu;