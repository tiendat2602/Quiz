import React, { Component } from 'react';

export class FirstInfomation extends Component {

	render() {
		return <div className="col-md-12" style={{height:350}}>
				<div className="card maincard border border-0 rounded-0">
				 	<div className="card-header bg-primary text-white text-center font-weight-bold rounded-0">
				 		Lời Nói Đầu
				 	</div>
				 	<div className="card-body">
				 		<h5>Chào các bạn</h5>
				 		<p>
				 			Quiz.com ra đời với mục đích giúp các bạn có thể ôn tập kiến thức lập trình
				 			của mình một cách nhanh chóng thông qua hình thức thi trắc nghiệm.
				 			Các câu hỏi của trang được sưu tầm từ nhiều trang web dạy lập trình có uy tín.
				 			Hiện tại trang vẫn đang tiếp tục sưu tầm để bổ sung vào ngân hàng câu hỏi để nâng 
				 			cao chất lượng các bài test.
				 		</p>
				 		<p>
				 			Chúc các bạn vui vẻ !
				 		</p>
				 	</div>
				</div>
		</div>
	}
}