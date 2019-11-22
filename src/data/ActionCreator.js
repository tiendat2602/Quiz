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
