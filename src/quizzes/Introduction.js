import React, { Component } from 'react';

export class Introduction extends Component {

	render() {
		return <>
				<div>
					<img src={ process.env.PUBLIC_URL +"/images/introduce.jpg"} 
					alt="introduce image"
					className="img-thumbnail rounded-0" />
				</div>
				<div id="accordion" className="mt-2">

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="card-link d-flex" data-toggle="collapse" href="#collapseOne">
					        Giới thiệu
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseOne" className="collapse show" data-parent="#accordion">
					      <div className="card-body">
					        Trang cung cấp các bài test nhanh về các ngôn ngữ lập trình.
					        Mỗi bài test gồm 10 câu được lựa chọn ngẫu nhiên từ bộ đề gồm hàng nghìn câu hỏi.
					        Thời gian làm bài là không giới hạn.
					        Kết quả được đánh giá dựa trên số câu trả lời đúng và thời gian làm bài.
					      </div>
					    </div>
					  </div>

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="collapsed  card-link d-flex" data-toggle="collapse" href="#collapseTwo">
					        Hướng dẫn làm bài
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseTwo" className="collapse" data-parent="#accordion">
					      <div className="card-body">
					        Lựa chọn ngôn ngữ muốn test từ menu phía trên hoặc bên cạnh.
					        Sau khi làm xong bài bấm nút Nộp Bài để xem kết quả và kiểm tra đáp án
					      </div>
					    </div>
					  </div>

					  <div className="card border-0 rounded-0">
					    <div className="card-header">
					      <a className="collapsed card-link d-flex" data-toggle="collapse" href="#collapseThree">
					        Lưu ý
					        <span className="ml-auto">+</span>
					      </a>
					    </div>
					    <div id="collapseThree" className="collapse" data-parent="#accordion">
					      <div className="card-body">
					        Thời gian làm bài là không giới hạn
					      </div>
					    </div>
					  </div>

					</div>
		</>
	}
}