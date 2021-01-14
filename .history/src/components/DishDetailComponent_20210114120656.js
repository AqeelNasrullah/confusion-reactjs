import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    renderComments(comments) {
        if(comments != null)
            comm = comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>{comment.author} at {comment.date}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                </div>
            </div>
        );
    }
}

export default DishDetail;