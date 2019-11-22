import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './Header';
import { dataTypes } from '../data/Types';
import { loadData } from '../data/ActionCreator';
import { TableMenuCategories } from './TableMenuCategories';
import { DataGetter } from '../data/DataGetter';
import { MiddleComponent } from './MiddleComponent';
//import { QuizzesList } from './QuizzesList';
//import { Timer } from './Timer';

const randomQuestion = (allQuestion = []) => {
	if(allQuestion.length === 0) {
		return [];
	} else {

	var subQuestions = [];
	var ids = allQuestion.map(q => q.id);
	while (subQuestions.length < 1) {
		var randomIndex = Math.floor(Math.random()*ids.length);
		var selectedId = ids[randomIndex];
		var selectedQuestion = allQuestion.find(q => q.id === selectedId);
		if(!subQuestions.find(q => q.id === selectedId)){
			subQuestions.push(selectedQuestion);
		}
	} 
	return subQuestions;
	}
}

const mapStateToProps = (storeData) =>({
	...storeData, questions: randomQuestion(storeData[storeData.selected_category])
})

const mapDispatchToProps = {
	loadData
}

export const QuizzesConnector = connect(mapStateToProps,mapDispatchToProps)(
	class InnerQuizzesConnector extends Component {

	render() {
		if(!this.props.categories || this.props.categories.length === 0) {
				return <h1> No Data </h1>
			} else {
				return <div className="container-fluid">
							<Header categories = {this.props.categories} />
						<Switch>
							<Route path="/" exact = {true} render = {(routeProps) => 
								<TableMenuCategories categories= {this.props.categories} />} />
							<Route path="/:category" exact={true} render={(routeProps) =>
								<DataGetter {...this.props} {...routeProps} >
									<MiddleComponent {...this.props} {...routeProps} />
								</DataGetter>
							} />
						</Switch>
						</div>
					}
			}

	componentDidMount() {
		this.props.loadData(dataTypes.CATEGORIES);
		} 
	}
)