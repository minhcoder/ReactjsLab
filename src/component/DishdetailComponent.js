import React, { Component } from "react";
import {Card, CardBody, CardImg,Jumbotron, CardImgOverlay, CardText, CardTitle,Breadcrumb,BreadcrumbItem,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../share/baseUrl";
import {FadeTransform, Fade, Stagger } from "react-animation-components";
function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <FadeTransform in 
            transformProps={{
            exitTransform:'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <CardImg src={baseUrl+dish.image} alt={dish.name}/>
                <CardImgOverlay>
                </CardImgOverlay>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        </div>
    )
}
class CommentForm extends Component{
    constructor(props){
        super(props);
        
        this.state={
            isModelOpen: false,
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleComment=this.handleComment.bind(this);
    }
    toggleModal(){
        this.setState({
            isModelOpen:!this.state.isModelOpen,
        })
    }
    handleComment(value){
        this.toggleModal();
        this.props.postComment(this.props.dishId, value.rating,value.author, value.comment)
        value.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-comments fa-lg"></span> Submit Comment  
                </Button>
            <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                <ModalBody>
                    <Form onsubmit={this.handleComment}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input type="select" id="rating" name="rating" innerRef={(input)=>this.rating=input}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="yourname">Your Name</Label>
                            <Input type="text" id="yourname" name="yourname" innerRef={(input)=>this.yourname=input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="yourcomment">Comment</Label>
                            <Input type="textarea" id="yourcomment" name="yourcomment" innerRef={(input)=>this.yourcomment=input}/>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary" color="primary">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }

}
function RenderComments({comments,postComment, dishId}){
    if (comments != null){
        return(
            <div className="col12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul>
                <Stagger in>
                {comments.map((comment)=>{
                    return (  
                        <Fade in>                      
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>{comment.rating}</p>
                                <p>{comment.author}</p>
                            </li>
                        </Fade>
                    )
                })}
                </Stagger>
                </ul>
                <div className="ml-auto">
            </div>
                <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
        );
    }
    else
        return (
            <div></div>
            )       
}


function DishDetail(props){
    if(props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    }else if(props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }else if(props.dish!=null){
        return(
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
            </div>
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comment}
                postComment={props.addComment}
                dishId={props.dish.id}/>
            </div>
            </div>

            
        )
    }else{
        return(
            <div></div>
        )
    }
}
export default DishDetail;