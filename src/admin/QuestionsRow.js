import React, { Component } from 'react';
import { dataTypes } from '../data/Types';

export class QuestionsRow extends Component {


	render() {
		return <tr>
			<td>{ this.props.question.id }</td>
			<td> { this.props.question.question }</td>
			{ 
				this.props.question.option.map(op =>
				<td key={op}>{op}</td>) 
			}
			<td>{this.props.question.answer}</td>
			<td>
				<button type="button" className="btn btn-sm btn-danger mx-1"
					onClick = {() => 
						this.props.deleteQuestion(dataTypes[this.props.dataType],this.props.question)}>
					Xoá
				</button>
				<button type="button" className="btn btn-sm btn-primary"
						onClick = {() => 
						this.props.handleEditQuestion(this.props.dataType.toLowerCase(),this.props.question.id)}>
					Cập nhật
				</button>
			</td>
		</tr>
	}
}