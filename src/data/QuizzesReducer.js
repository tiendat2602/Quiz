import { actionTypes } from './Types';

export const QuizzesReducer = (storeData, action) => {

	switch(action.type) {
		case actionTypes.LOAD_DATA:
			return {
				...storeData, 
				[action.payload.dataType]: action.payload.data,
				selected_category: action.payload.params
			};
		default:
			return storeData || {};
	}
}