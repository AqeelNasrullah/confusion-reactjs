import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({ comments }) {
        if(comments != null) {
            const comm = comments.map((comment) => {
                return (
                    <li>
                        <p className="mb-0">{comment.comment}</p>
                        <p>{comment.author} at {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comm}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;