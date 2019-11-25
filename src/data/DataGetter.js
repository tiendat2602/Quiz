import React, { Component } from "react";
import { dataTypes } from "../data/Types";

export class DataGetter extends Component {

    render() {
        console.log("DataGetter render()");
        return <div className="row mb-5 ml-0 mr-0"> 
                    { this.props.children } 
            </div>
    }

    componentDidMount = () => {
        this.getData();
    }

    componentDidUpdate = () => {
        this.getData();
    }
    
    getData = () => {
            const selected_category = this.props.selected_category || "null";
            const currentSelectCategory = this.props.match.params.category;
            const params = currentSelectCategory;
            const category = currentSelectCategory.toUpperCase();
            if(selected_category !== params) {
                this.props.loadData(dataTypes[category],params);     
            }
    }
}