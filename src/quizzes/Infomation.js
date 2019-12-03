import React, { Component } from 'react';
import { FirstInfomation } from './FirstInfomation';
import { SecondInfomation } from './SecondInfomation';
import { ThirdInfomation } from './ThirdInfomation';

export class Infomation extends Component {

	render() {

			switch(this.props.match.params.order) {
				case "first":
					return 	<div className="row mb-5">
								<FirstInfomation />
							</div>
				case "second":
					return 	<div className="row mb-5">
								<SecondInfomation />
							</div>
				default:
					return 	<div className="row mb-5">
								<ThirdInfomation />
							</div>
			}
		
	}
}