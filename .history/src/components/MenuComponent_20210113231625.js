import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from "reactstrap";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDish: null
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;