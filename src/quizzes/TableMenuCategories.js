import React, { Component } from 'react';
import { Introduction } from './Introduction';
import { Link } from 'react-router-dom';

export class TableMenuCategories extends Component {

	render() {
		return <div className="row">
			<div className="col-xs-12 col-sm-3">
				<Introduction />
			</div>
			<div className="col-xs-12 col-sm-9">
				<div className="row mt-2 pl-3">
					{ this.props.categories.map(cat => 
						<div className="card col-xs-12 col-md-3 p-0 m-4 border-0 shadow" key={cat}>
						    <img className="card-img-top" 
						    	src={ process.env.PUBLIC_URL + `/images/${cat}.jpg`} 
						    	alt="Card image"
						    	style={{width:"100%",height:"150px"}} />
						    <div className="card-body">
						      <Link href="#" className="stretched-link font-weight-bold"
						      	to={`/${cat}`}>
						      	{cat.toUpperCase()}
						      </Link>
						    </div>
						</div>
	  				)}
  				</div>
			</div>
		</div>
	}
}