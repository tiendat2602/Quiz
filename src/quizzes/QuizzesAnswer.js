import React, { Component } from 'react';

export class QuizzesAnswer extends Component {

	getClass = (option,question) => {
		if((option === question.userAnswer) && (option === question.answer)) {
			return "form-group form-check d-flex mb-2 bg-info";
		} else {
			if((option !== question.userAnswer) && (option !== question.answer)) {
				return "form-group form-check d-flex mb-2 bg-light";
			} else {
				if(option === question.userAnswer) {
					return "form-group form-check d-flex mb-2 bg-warning";
				} else {
					return "form-group form-check d-flex mb-2 bg-info";
				}
			}
		}
	}

	render() {
		return <div className="col-12 pl-5 pr-5 pt-2">
						<div className="text-center bg-secondary text-white rounded">
							<h1>Chúc mừng bạn đã hoàn thành bài thi</h1>
							<p>Số câu trả lời đúng của bạn: {this.props.score}</p>
							<p>Thời gian làm bài {this.props.minutes} phút {this.props.second} giây</p>
							<p className="text-center">Mời bạn kiểm tra đáp án</p>
						</div>
						{Object.entries(this.props.questions).map(obj =>
						<div key={obj[1].id} className="mb-4 pl-5 pr-5 border border-top-0 border-left-0 border-right-0">
							<h6>
								{`Question ${Number(obj[0])+1}: ${obj[1].question}`}
							</h6>
							<form className="m-4">
								{obj[1].option.map(op => 
									<div className={this.getClass(op,obj[1])} key={op}>
										<label className="form-check-label">
											<input type="radio" name={`question${obj[1].id}`} 
											value={op} className="form-check-input"
											checked = {op === obj[1].userAnswer} disabled
											onChange = {() => this.handleChange(op,obj[1])}/>
											{op}
										</label>
									</div>
								)}
							</form>
						</div>
					)}
				</div>
	}
}