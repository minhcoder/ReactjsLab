import React,{ Component } from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle,Button} from 'reactstrap';
class Menu extends Component{
    constructor(props){
        super(props);

    }
    
    renderDish(dish, listDish){
        if(dish!=null){
            let data =listDish.filter(el=> dish===el.id)[0]
            return (
                <Card>
                <CardImg width="10%" src={data?.image} alt={data?.name}/>
                    <CardBody>
                        <CardTitle>{data?.name}</CardTitle>
                        <CardText>{data?.description}</CardText>
                    </CardBody>
                </Card>
            )
            }else{
                return (
                    <div></div>
                )
            }
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Button><Card onClick={()=>{this.props.onClickTest(dish.id)}}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card></Button>
                </div>
            )
        });
        return( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.props.selectedDish,this.props.dishes)}
                </div>
            </div>
        );
    }
}
export default Menu;