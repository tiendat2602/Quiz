import React, { Component } from 'react';

export class Footer extends Component {

	render() {
		return <footer className="footer d-flex align-content-center pl-2 pr-2 text-white bg-success">
		    		<div className="mr-auto mt-4">
		    			<span>Quiz.com</span>
						<p>© 2019 Quiz.com. All rights reversed </p>
					</div>
					<div className="ml-auto mt-4">
						<p className="mb-0">Liên hệ</p>
						<p>
							<i className="fa fa-phone mr-1"></i>
							086-824-9588
						</p>
					</div>
		</footer>
	}
}