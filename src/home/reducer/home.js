import {
  GET_TEST_DATA_SUCCESS,
  GET_TEST_DATA_FAILURE,
  GET_TEST_DATA_REQUEST,
} from '../actions/getTestAction';

const INITIAL_STATE = {
  data: 'nothing yet',
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TEST_DATA_SUCCESS:
      return {...state, data: action.data, loading: false};
    case GET_TEST_DATA_FAILURE:
      return {...state, loading: false};
    case GET_TEST_DATA_REQUEST:
      return {...state, loading: true};
    default:
      return {...state};
  }
}
