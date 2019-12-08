import React, { Component } from 'react';

export class SecondInfomation extends Component {

	render() {
		return <div className="col-md-12" style={{height:350}}>
				<div className="card maincard border-0 rounded-0">
				 	<div className="card-header bg-primary text-white text-center font-weight-bold rounded-0">
				 		Bản Quyền
				 	</div>
				 	<div className="card-body">
				 		<p>
				 			Toàn bộ câu hỏi trang đang sử dụng đều từ các nguồn public
				 		</p>
				 		<p>
				 			Các câu hỏi đều được sử dụng với mục đích đào tạo miễn phí,
				 			không được sử dụng cho bất kỹ mục đích thương mại nào.
				 		</p>
				 	</div>
				</div>
		</div>
	}
}