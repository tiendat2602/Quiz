import React, { Component } from 'react';
import { Timer } from './Timer';
import { QuizzesList} from './QuizzesList';

export class MiddleComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			stopTimer: false,
			score: 0
		}
	}

	submitScore = (score) => {
		this.setState({score: score || "00",stopTimer: true});
	}

	render() {
		return <>
			<Timer {...this.props} score = {this.state.score} stopTimer = {this.state.stopTimer} />
			<QuizzesList {...this.props} submitScore={this.submitScore} />
		</>
	}
} 

