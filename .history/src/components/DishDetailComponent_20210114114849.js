import React, { Component } from 'react';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default DishDetail;