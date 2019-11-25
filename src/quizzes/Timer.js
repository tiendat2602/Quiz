import React, { Component } from 'react';

export class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			minutes: "",
			second: "",
			selectedCategory: props.selected_category || "notSelect",
			reset:false
		};
		this.t = 0;
	}

	static getDerivedStateFromProps(props, state) {
		if(props.selected_category !== state.selectedCategory) {	
			return {
						selectedCategory: props.selected_category,
						reset: true
					}
		} else {
			return {reset:false}
		}
		
  }

	timer = () => {

		var start = 0;
		this.t = setInterval(() => {
			console.log("timer is running");
			start =start+1;
			var minutes = Math.floor(start/60);
			var second = start%60;
			this.setState({minutes: minutes, second: second});
			if(this.state.minutes < 10) {
				this.setState({minutes: "0"+this.state.minutes});
			}
			if(this.state.second < 10) {
				this.setState({second: "0"+this.state.second});
			}
		},1000);
	}

	render() {
		return <div className="col-md-3 p-3 mt-1 border border-top-0 border-bottom-0 border-left-0">
				<h3 className="bg-success text-center text-white rounded" >
					{`Bài thi ${this.props.match.params.category.toUpperCase()}`}
				</h3>
				<div className="p-1 bg-success text-white font-weight-bold rounded">
					<p className="mb-2">Thời gian làm bài:
						<span className="text-center text-danger font-weight-bold pl-3 pr-3 rounded">
							{this.state.minutes} : {this.state.second}
						</span>
					</p>
				</div>
		</div>
	}

	componentDidMount = () => {
		this.timer();
	}

	componentDidUpdate = () => {
		if(this.state.reset) {
			clearInterval(this.t);
			this.timer();
		}
	}

	componentWillUnmount = () => {
		console.log("Timer componentWillUnmount()");
		clearInterval(this.t);
		this.props.submitTime(this.state.minutes,this.state.second);
	}
	
}