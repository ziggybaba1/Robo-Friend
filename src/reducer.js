import { 
	CHANGE_SEARCH_FIELDS,
	REQUEST_ROBOT_PENDING,
	REQUEST_ROBOT_SUCCESS,
	REQUEST_ROBOT_FAILED
} from './constant.js';

const initialStateSearch = {
  searchField: ''
}

export const searchRobot = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELDS:
      return Object.assign({}, state , {searchField: action.payload}); //having error
      //return {...state,searchField: action.payload}
    default:
      return state;
  }
}

const initialStateRobot = {
  isPending: false,
  robots: [],
  error: ''
} 

export const requestRobots = (state=initialStateRobot, action={}) => {
  switch(action.type) {
  	case REQUEST_ROBOT_PENDING:
  		return Object.assign({}, state , {isPending: true});
  	case REQUEST_ROBOT_SUCCESS:
  		return Object.assign({}, state, {robots: action.payload, isPending: false});
  	case REQUEST_ROBOT_FAILED:
  		return Object.assign({}, state, {error: action.payload, isPending: false});
  	default:
      	return state;
  	}
  }
