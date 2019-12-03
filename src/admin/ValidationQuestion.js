import React, { Component } from "react";

export class ValidationQuestion extends Component {

    render() {
        if (this.props.errors) {  
            return <h6 className="text-danger" >
                    { this.props.errors }
                   </h6>
        }
        return null;
    }
}