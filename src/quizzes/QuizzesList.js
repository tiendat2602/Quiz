import React, { Component } from 'react';
import '../css/QuizzesList.css';
import { QuizzesAnswer } from './QuizzesAnswer';


export class QuizzesList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			questions: props.questions || [],
			showAnswer: false,
			selectedCategory: props.selected_category || "notSelect"
		}
	}

	static getDerivedStateFromProps(props, state) {
		console.log("QuizzesList getDerivedStateFromProps()");
		if(props.selected_category !== state.selectedCategory) {
				
			console.log("update state.questions and select");
			return {
						questions: props.questions,
						selectedCategory: props.selected_category,
						showAnswer: false
					}
		}
		
		 return state;
  }

	handleChange = (option,question) => {
		if(option === question.answer) {

			this.setState({questions: this.state.questions.map(q => {
				if(q.id === question.id) {
					return {...q,a: true, userAnswer: option};
				} else {
					return q;
				}
			})});

		} else {
			this.setState({questions: this.state.questions.map(q => {
				if(q.id === question.id) {
					return {...q,a:false, userAnswer: option};
				} else {
					return q;
				}
			})});
		}

			
	}

	finalTest = () => {
		const score = this.state.questions.filter(q => q.a).length;
		console.log(score);
		this.props.submitScore(score);
		this.setState({showAnswer:true});
	}

	render() {
		console.log("QuizzesList render()");
		if(!this.props.questions) {
			return <h1>no data</h1>
		} else {
			if(!this.state.showAnswer) {
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
			} else {

				return <QuizzesAnswer questions = { this.state.questions } />
		 	}
		}
	}
}