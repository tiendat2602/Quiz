import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { QuestionsRow } from './QuestionsRow';

export class QuestionsTable extends Component {

	handleEditClick = (cat,id) => {
		this.props.history.push(`/admin/edit/${cat}/${id}`);
	}

	render() {
		const category = this.props.match.params.category || "notselect";
		if(!this.props[category]) {
			return <React.Fragment>
					<div className="spinner-border"></div>
					<span>Loading...</span>
				</React.Fragment>
		} else {
			return <React.Fragment>
				<h1 className="text-secondary text-center col-12">
					Danh sách câu hỏi {category.toUpperCase()} 
				</h1>
				<table className="table table-sm table-striped bordered"
				style={{fontSize:"10px"}}>
	            <thead>
	                <tr>
	                    <th>ID</th>
	                    <th>Câu hỏi</th>
	                    <th>Đáp án 1</th>
	                    <th>Đáp án 2</th>
	                    <th>Đáp án 3</th>
	                    <th>Đáp án 4</th>
	                    <th>Đáp án đúng</th>
	                    <th>Cập nhật</th>
	                </tr>
	            </thead>
	            <tbody>
	                { this.props[category].map(que => 
	                    <QuestionsRow key={ que.id} question={ que }
	                        deleteQuestion={ this.props.deleteQuestion } 
	                        handleEditQuestion = { this.handleEditClick }
	                        dataType = {this.props.match.params.category.toUpperCase()}/>
	                )}
	            </tbody>
	        </table>
	        <div className="text-center col-12">
	            <Link to={`/admin/create/${category}`} className="btn btn-primary">
	                Tạo mới
	            </Link>
        	</div>
        </React.Fragment>
		}
	}
}