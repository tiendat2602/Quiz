import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuCategories } from './MenuCategories';

export class Header extends Component {

	render() {
		return <header>
				<div className="d-flex p-2">
					<Link to ="/" className="ml-5 text-primary">Quizzes.com</Link>
					<span className="ml-auto mr-5 font-weight-light font-italic">
					Thousand quizzes
					</span>
				</div>
				<nav className="navbar navbar-expand-sm  bg-success">
  					<button className="navbar-toggler bg-light" type="button" 
  						data-toggle="collapse" data-target="#collapsibleNavbar">
    					<span className="navbar-toggler-icon text-dark"></span>
  					</button>

  					<div className="collapse navbar-collapse" id="collapsibleNavbar">
    					<ul className="navbar-nav">
					      <li className="nav-item">
					        <Link className="nav-link text-white" to="/">Trang Chủ</Link>
					      </li>
					      <li className="nav-item dropdown">
					      	<a className="nav-link dropdown-toggle text-white" href="#" 
					      		id="navbardrop" data-toggle="dropdown">
					        Ngôn Ngữ
					      	</a>
						    <div className="dropdown-menu text-white">
						    	<MenuCategories categories = {this.props.categories} />
						    </div>
					   	 </li>
					     <li className="nav-item dropdown">
					      <a className="nav-link dropdown-toggle text-white" href="#" 
					      	id="navbardrop1" data-toggle="dropdown">
					        Thông Tin
					      </a>
					      <div className="dropdown-menu">
					      	<Link className="dropdown-item" to="/infomation/first">Lời nói đầu</Link>
					      	<Link className="dropdown-item" to="/infomation/second">Bản quyền</Link>
					      	<Link className="dropdown-item" to="/infomation/third">Liên hệ</Link>
					      </div>
					     </li>
					     <li className="nav-item">
					     	<Link to="/admin" className="nav-link text-white">
					     		Quản Trị
					     	</Link>
					     </li>
    					</ul>
					    <form className="form-inline ml-auto">
						    <div className="input-group">
						      <input type="text" className="form-control p-0" placeholder="Search" />
						      <div className="input-group-append">
						      	    <button className="btn btn-primary" type="submit">
						      	    	<i className="fas fa-search-location"></i>
						      	    </button>
						      </div>
						    </div>
					  	</form>
  					</div>
				</nav>
		</header>
		}
}