import React, { Component } from 'react';
import { Timer } from './Timer';
import { QuizzesList} from './QuizzesList';
import { QuizzesAnswer } from './QuizzesAnswer';

export class MiddleComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			score: 0,
			minutes: 0,
			second:0
		}
	}

	submitResult = (questions,score) => {
		this.setState({questions:questions,score:score});
	}

	submitTime = (minutes,second) => {
		this.setState({minutes: minutes,second: second});
	}

	render() {
		console.log("MiddleComponent render()");
		if(!this.props.match.params.result) {
		return <>
			<Timer {...this.props} submitTime = {this.submitTime} />
			<QuizzesList {...this.props} submitResult={this.submitResult} />
		</>
		} else {
			if(this.props.match.params.result === "result") {
			return <QuizzesAnswer questions={this.state.questions} score={this.state.score} 
						minutes = {this.state.minutes} second = {this.state.second} />
			} else {
				return <h1 className="text-center text-danger col-12">404 page not found</h1>
			}
		}
	}
} 

