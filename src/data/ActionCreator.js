import { actionTypes } from './Types';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType,params) => ({
	type: actionTypes.LOAD_DATA,
	payload: dataSource.getData(dataType,params)
				.then(response => 
					({	dataType, 
						data: response.data,
						params
					})
				)
})

export const deleteQuestion = (dataType,data) => ({
 	type: actionTypes.DELETE_DATA,
 	payload: dataSource.deleteData(dataType,data).then(response => ({
 		dataType,
 		data:data
 	}))
})

export const getOneQuestion = (dataType,id) => ({
	type: actionTypes.GET_ONE_DATA,
	payload: dataSource.getOneData(dataType,id).then(response => ({
		dataType,
		data: response.data,
	}))
})

export const updateQuestion = (dataType,data) => ({
	type: actionTypes.UPDATE_DATA,
	payload: dataSource.updateData(dataType,data).then(response => ({
		dataType,
		data: response.data
	}))
})

export const storeQuestion = (dataType,data) => ({
	type: actionTypes.STORE_DATA,
	payload: dataSource.storeData(dataType,data).then(response => ({
		dataType,
		data: response.data
	}))
})
