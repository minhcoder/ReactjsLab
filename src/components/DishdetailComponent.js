import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    function RenderComments({comments}){
        if (comments == null) {
            return (<div></div>)
        }
        const dishdetail = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author},
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list'>
                    {dishdetail}
                </ul>

            </div>
        )
    }
    function DishDetail(props){
        const dish = props.dish

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }
        return (
            <div className='row'>
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments}/>
            </div>
        )
    }
export default DishDetail;



















// import React,{Component} from "react";
// import {Card, CardBody,CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';

// class Dishdetail extends Component{
//     constructor(props){
//         super(props);
//     }
//     renderDish(dish){
//     if(dish!=null){
//         return(
//             <div className='col-12 col-md-5 m-1'>
//             <Card>
//                 <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//             </div>
//         )
//     }else{
//         return(
//             <div></div>
//         )
//     }
// }
//     renderComments(comments){
//         if(comments==null){
//             return(
//             <div></div>
//             )
//         }
//         const Dishdetail=comments.map((comments)=>{
//             return(
//                 <li key={comments.id}>
//                     <p>{comments.author}</p>
//                     <p>{comments.rating}</p>
//                     <p>{comments.comment}</p>
//                     <p>{comments.date}</p>
//                 </li>
//             )
//         })
//         return(
//             <div className='col-12 col-md-5 m-1'>
//                 <h4>Comments</h4>
//                 <ul className="list">
//                     {Dishdetail}
//                 </ul>
//             </div>
//         )
//     }

//     render() {
//         const dish=this.props.dish
//         if(dish==null){
//             return(<div></div>)
//         }
//         const dishItem=this.renderDish(dish);
//         const dishComment=this.renderComments(dish.comments)

//         return (
//             <div className="container">
//             <div className="row">
//                 {dishItem}
//                 {dishComment}
//             </div>
//             </div>
//         )
//     }
// }
// export default Dishdetail;
