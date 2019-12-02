import Axios from 'axios';
import { RestUrls } from './Urls';

export class RestDataSource {

	getData = (dataType,params) => 
		this.sendRequest("get", RestUrls[dataType]);

	deleteData = (dataType,data) => 
		this.sendRequest("delete",`${RestUrls[dataType]}/${data.id}`, data);

	getOneData = (dataType,id) =>
		this.sendRequest("get",`${RestUrls[dataType]}/${id}`);

	updateData = (dataType, data) =>
		this.sendRequest("put",`${RestUrls[dataType]}/${data.id}`,data);

	storeData = (dataType,data) =>
	  	this.sendRequest("post",`${RestUrls[dataType]}`,data);

	sendRequest = (method, url, data) => Axios.request({method, url, data});
}