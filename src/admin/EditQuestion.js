import React, { Component } from 'react';
import { dataTypes } from '../data/Types';
import { ValidationQuestion } from './ValidationQuestion';

export class EditQuestion extends Component {

	constructor(props) {
		console.log("EditQuestion constructor()");
		super(props);
		this.state = {
			question: {id:"",
					   question:"",
					   option:[],
					   answer:""},
			selectedItemID:-1,
			validationErrors: {}
		};
	}

	handleOnChange = (ev) => {
		let name = ev.target.name;
		let val = ev.target.value;

		switch(name) {
			case "option1":
				this.setState((state) => {
					state.question.option[0] = val;
					return {question: state.question};
				});
				break;
			case "option2":
				this.setState((state) => {
					state.question.option[1] = val;
					return {question: state.question};
				});
				break;
			case "option3":
				this.setState((state) => {
					state.question.option[2] = val;
					return {question: state.question};
				});
				break;
			case "option4":
				this.setState((state) => {
					state.question.option[3] = val;
					return {question: state.question};
				});
				break;
			default: 
				this.setState({question: {...this.state.question, [name]: val}});
		}

	}

	handleSubmitQuestion = () => {

		this.setState(state => {
			const newState = {...state, validationErrors: {}};

			Object.entries(state.question).filter(item => item[0] !== "id").forEach(item => {
				console.log("item in loop:",item);
				if(item[0] === "option") {
					const val = item[1];
					var i;
					for(i=0; i<4; i++) {
						if(val[i] === undefined) {
							const index = i+1;
							const op = "option"+index;
							newState.validationErrors[op] = "Giá trị không được để trống";
						}
					}
				} else {
					if(item[1] === "") {
						newState.validationErrors[item[0]] = "Giá trị không được để trống";
					}
				}
		});
			return newState;
		},() => {
			console.log(Object.keys(this.state.validationErrors).length === 0);
			if(Object.keys(this.state.validationErrors).length === 0) {
				let mode = this.props.match.params.mode;
				let dataType = this.props.match.params.category.toUpperCase();
				let data = this.state.question;
				if(mode === "create") {
					this.props.storeQuestion(dataTypes[dataType],data)
				} else {
					this.props.updateQuestion(dataTypes[dataType],data);
				}
				this.props.history.push(`/admin/list/${dataType.toLowerCase()}`);
			}
		});
	}

	handleCancel = () => {
		let dataType = this.props.match.params.category;
		this.props.history.push(`/admin/list/${dataType}`);
	}

	render() {
		console.log("EditQuestion render()");
		return <div>
			<h1 className="text-secondary text-center col-12"> 
				Cập nhật câu hỏi {this.props.match.params.category.toUpperCase()} 
			</h1>
			<div className="form-group" >
                <label className="font-weight-bold">ID</label>
                <input className="form-control" name="id"
                    disabled autoComplete="off"
                    defaultValue={ this.state.question.id } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Câu hỏi</label>
                <input className="form-control" name="question"
                    defaultValue={ this.state.question.question }
                   	autoComplete="off"
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.question } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Phương án 1</label>
                <input className="form-control" name="option1"
                    defaultValue={ this.state.question.option[0] || "" }
                    autoComplete="off"
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.option1 } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Phương án 2</label>
                <input className="form-control" name="option2"
                    defaultValue={ this.state.question.option[1] || "" }
                    autoComplete="off"
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.option2 } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Phương án 3</label>
                <input className="form-control" name="option3"
                    defaultValue={ this.state.question.option[2] || "" }
                    autoComplete="off"
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.option3 } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Phương án 4</label>
                <input className="form-control" name="option4"
                    defaultValue={ this.state.question.option[3] || "" }
                    autoComplete="off" 
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.option4 } />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Đáp án</label>
                <input className="form-control" name="answer"
                    defaultValue={ this.state.question.answer }
                    autoComplete="off"
                    onChange = { this.handleOnChange } />
                <ValidationQuestion errors={ this.state.validationErrors.answer } />
            </div>
            <div className="text-center col-12">
            <button type="button" className="btn btn-primary m-1"
            		onClick = { this.handleSubmitQuestion }>
            	Save
            </button>
            <button type="button" className="btn btn-primary m-1"
            		onClick = { this.handleCancel }>
            	Cancel
            </button>
            </div>
		</div>
	}

	componentDidUpdate = () => {
		console.log("EditQuestion componentDidUpdate()");
		if(this.props.selectedItem) {
			if(this.state.selectedItemID !== this.props.selectedItem.id) {
			this.setState({question:this.props.selectedItem, selectedItemID: this.props.selectedItem.id});
			}
		}
	}

	componentDidMount = () => {
		console.log("EditQuestion componentDidMount()");
		const dataType = this.props.match.params.category.toUpperCase();
		const id = this.props.match.params.id;
		if(this.props.match.params.mode === "edit") {
			console.log("send request");
			this.props.getOneQuestion(dataTypes[dataType],id);
		}
	}
}