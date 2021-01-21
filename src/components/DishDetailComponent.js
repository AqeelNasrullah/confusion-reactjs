import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/config";
import { FadeTransform, Fade, Stagger } from "react-animation-components"

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModelOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.name, values.comment);    }

    render() {
        return (
            <div>
                <div>
                    <Button outline onClick={this.toggleModal}><i className="fa fa-pencil"></i> Submit Comment</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".name" id="name" className="form-control" placeholder="Your Name"
                                              validators={{
                                                  minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors model=".name"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" rows={6} className="form-control" />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


    function RenderDish({dish}) {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }

    function RenderComments({ comments, postComment, dishId }) {
        if(comments != null) {
            const comm = comments.map((comment) => {
                return (
                    <Fade in>
                        <li key={comment.id}>
                            <p className="mb-0">{comment.comment}</p>
                            <p>-- {comment.author} at {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    </Fade>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <Stagger in>
                            {comm}
                        </Stagger>
                    </ul>
                    <CommentForm postComment={postComment} dishId={dishId} />
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }


export default DishDetail;