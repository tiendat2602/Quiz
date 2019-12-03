import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { loadData, deleteQuestion, getOneQuestion, updateQuestion, 
			storeQuestion } from '../data/ActionCreator';
import { connect } from 'react-redux';
import { dataTypes } from '../data/Types';
import { AdminMenuCategories } from './AdminMenuCategories';
import { AdminDataGetter } from './AdminDataGetter';
import { QuestionsTable } from './QuestionsTable';
import { EditQuestion } from './EditQuestion';
import { AuthPrompt } from '../auth/AuthPrompt';
import { authWrapper } from '../auth/AuthWrapper';



const mapStateToProps = (storeData) =>({
	...storeData
})

const mapDispatchToProps = {
	loadData,deleteQuestion, getOneQuestion, updateQuestion, storeQuestion
}

export const Admin = authWrapper(connect(mapStateToProps,mapDispatchToProps)(
	class InnerAdmin extends Component {

		signout = () => {
			this.props.signout();
			this.props.history.push("/admin");
		}
		
	render() {

		if(!this.props.categories || this.props.categories.length === 0) {
				return <React.Fragment>
					<span className="spinner-border"></span>
					<span>Loading...</span>
				</React.Fragment>
			} else {
				return <div className="container-fluid">
		             <div className="row">
		                <div className="col bg-success text-white d-flex">
		                    <div className="navbar-brand">
		                    	<Link to="/" className="text-white font-weight-bold">
		                    		Quiz.com
		                    	</Link>
		                    </div>
			                    { this.props.isAuthenticated &&
			                        <button onClick={ this.signout }
			                            className="btn btn-sm btn-danger text-white ml-auto m-2">
			                            Đăng Xuất
			                        </button>
	                 			} 
		                	</div>
		            </div>
		            <div className="row">
		            	<div className="col-sm-12 col-md-2">
		            		<AdminMenuCategories categories = {this.props.categories} />
		            	</div>
		            	<div className="col-sm-12 col-md-10">
		            		<Switch>
		            			{ 
		                            !this.props.isAuthenticated && 
		                               <Route component={ AuthPrompt } />
                        		}
		            			<Redirect from="/admin" to="/admin/list/html" exact={true} />
		            			<Route path="/admin/list/:category" exact = {true} render={(routeProps) =>
		            				<AdminDataGetter {...this.props} {...routeProps}>
		            					<QuestionsTable {...this.props} {...routeProps} />
		            				</AdminDataGetter>}/>
		            			<Route path ="/admin/:mode/:category/:id?" render = {(routeProps) =>
		            					<EditQuestion {...this.props} {...routeProps} />} />
		            		</Switch>
		            	</div>
		            </div>
		        </div>  
			}
		
	}

componentDidMount() {
	if(!this.props.categories) {
		this.props.loadData(dataTypes.CATEGORIES);
	}
}


	}

))

