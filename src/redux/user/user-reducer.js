import { userActionTypes } from './user.types';

//  importing Redux
//  importing the user state

//  setting the initial state for the user.
const INITIAL_STATE = {
	currentUser: null
}

//  storing it in a redux function
const userReducer = (state = INITIAL_STATE,  action) =>  {
	//  the switch check the case of the action
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				//  spreading the state
				...state,
				currentUser: action.payload
			}
		default:
			return state;
	}
}

export default userReducer;

