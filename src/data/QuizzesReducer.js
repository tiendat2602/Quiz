import { actionTypes } from './Types';

export const QuizzesReducer = (storeData, action) => {

	switch(action.type) {
		case actionTypes.LOAD_DATA:
			return {
				...storeData, 
				[action.payload.dataType]: action.payload.data,
				selected_category: action.payload.params
			};
		case actionTypes.DELETE_DATA:
			return {...storeData, [action.payload.dataType]: storeData[action.payload.dataType].filter(item => 
				item.id !== action.payload.data.id)};
		case actionTypes.GET_ONE_DATA: 
			return {...storeData, selectedItem: action.payload.data};
		case actionTypes.UPDATE_DATA:
			return {...storeData, [action.payload.dataType]: storeData[action.payload.dataType].map(item =>
				item.id === action.payload.data.id ? action.payload.data : item)};
		case actionTypes.STORE_DATA: 
			console.log("action payload:",action.payload);
			console.log("action type:", action.type);
			return {...storeData, [action.payload.dataType]: storeData[action.payload.dataType].concat([action.payload.data])};
		default:
			return storeData || {};
	}
}