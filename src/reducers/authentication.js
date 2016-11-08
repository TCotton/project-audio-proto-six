import {
	CHANGE_AUTH
} from '../actions/types';

export default function(state = false, action = null) {

	switch(action.type) {

		case CHANGE_AUTH:
			return action.payload;
		break;

		default:
			return state;
		break;

	}


}