import React, { Component } from 'react';

export class Introduction extends Component {

	render() {
		return <>
				<div>
					<img src={ process.env.PUBLIC_URL +"/images/introduce.jpg"} 
					alt="introduce image"
					className="img-thumbnail rounded-0" />
				</div>
				<div id="accordion" className="mt-2">

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="card-link d-flex" data-toggle="collapse" href="#collapseOne">
					        Giới thiệu
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseOne" className="collapse show">
					      <div className="card-body">
					        Lorem ipsum..
					      </div>
					    </div>
					  </div>

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="collapsed  card-link d-flex" data-toggle="collapse" href="#collapseTwo">
					        Hướng dẫn làm bài
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseTwo" className="collapse">
					      <div className="card-body">
					        Lorem ipsum..
					      </div>
					    </div>
					  </div>

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="collapsed card-link d-flex" data-toggle="collapse" href="#collapseThree">
					        Lưu ý
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseThree" className="collapse">
					      <div className="card-body">
					        Lorem ipsum..
					      </div>
					    </div>
					  </div>

					</div>
		</>
	}
}