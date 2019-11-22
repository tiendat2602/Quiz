import React, { Component } from "react";
import { dataTypes } from "../data/Types";

export class DataGetter extends Component {

    render() {
        return <div className="row mb-5"> 
                    { this.props.children } 
            </div>
    }

    componentDidMount = () => {
        console.log("DataGetter didmount()");
        this.getData();
    }

    componentDidUpdate = () => {
        console.log("DataGetter didupdate()");
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