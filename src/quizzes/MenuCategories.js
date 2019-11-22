import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MenuCategories extends Component {

	render() {

		return <>
				
				{ this.props.categories.map(cat =>
						<Link to={cat} key={cat}
						className="dropdown-item text-success">
							{cat.toUpperCase()}
						</Link>
				)}
		</>
	}
} 

