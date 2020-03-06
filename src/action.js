import { 
	CHANGE_SEARCH_FIELDS,
	REQUEST_ROBOT_PENDING,
	REQUEST_ROBOT_SUCCESS,
	REQUEST_ROBOT_FAILED
} from './constant.js';

export const setSearchField = (text) => ({
		type: CHANGE_SEARCH_FIELDS,
  		payload: text
	})

export const requestRobot = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOT_PENDING });
	fetch('http://dummy.restapiexample.com/api/v1/employees')
     .then(response => response.json())
     .then(data => dispatch({type: REQUEST_ROBOT_SUCCESS, payload: data.data}))
     .catch(error => dispatch({type: REQUEST_ROBOT_FAILED, payload: error}))
}
