import React, { Component } from 'react';
import '../css/QuizzesList.css';
import { QuizzesAnswer } from './QuizzesAnswer';


export class QuizzesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			questions: props.questions || [],
			selectedCategory: props.selected_category || "notSelect"
		}
	}

	static getDerivedStateFromProps(props, state) {
		if(props.selected_category !== state.selectedCategory) {	
			return {
						questions: props.questions,
						selectedCategory: props.selected_category,
					}
		}
		
		 return state;
  }

	handleChange = (option,question) => {
		if(option === question.answer) {

			this.setState({questions: this.state.questions.map(q => {
				if(q.id === question.id) {
					return {...q,correctedUserAnswer: true, userAnswer: option};
				} else {
					return q;
				}
			})});

		} else {
			this.setState({questions: this.state.questions.map(q => {
				if(q.id === question.id) {
					return {...q,correctedUserAnswer:false, userAnswer: option};
				} else {
					return q;
				}
			})});
		}

			
	}

	finalTest = () => {
		const score = this.state.questions.filter(q => q.correctedUserAnswer).length;
		const questions = this.state.questions;
		this.props.submitResult(questions,score);
		this.props.history.push(`/${this.props.selected_category}/result`);
	}

	render() {
		console.log("QuizzesList render()");
		if(!this.props.questions) {
			return <>
					<span className="spinner-border"></span>
					<span>Loading...</span>
				</>
		} else {
				return <div className="col-md-9 p-3">
					{Object.entries(this.props.questions).map(obj =>
						<div key={obj[1].id} className="mb-4 border border-top-0 border-left-0 border-right-0">
							<p className="mb-1">
								{`Question ${Number(obj[0])+1}:`}
							</p>
							<h6 className="mb-0">
								{`${obj[1].question}`}
							</h6>
							<form className="m-4">
								{obj[1].option.map(op => 
									<div className="form-group form-check mb-2" key={op}>
										<label className="form-check-label">
											<input type="radio" name={`question${obj[1].id}`} 
											value={op} className="form-check-input" 
											onChange = {() => this.handleChange(op,obj[1])}/>
											{op}
										</label>
									</div>
								)}
							</form>
						</div>
					)}
					<div className="text-center mt-3">
						<button type="button" className="btn btn-success"
							onClick = {this.finalTest}>
							Nộp Bài
						</button>
					</div>
			</div>
		}
	}
}