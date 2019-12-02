import React, { Component } from 'react';
import { ToggleLink } from './ToggleLink';

export class AdminMenuCategories extends Component {

	render() {
		return <React.Fragment>
			{this.props.categories.map(cat => 
				<ToggleLink to={`/admin/list/${cat}`} exact={true} key={cat}>
					{cat.toUpperCase()}
				</ToggleLink>)}
			</React.Fragment>
	}
 }
