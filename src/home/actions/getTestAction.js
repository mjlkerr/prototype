import {getTest} from '../../util/http/http';

export const GET_TEST_DATA_SUCCESS = 'GET_TEST_DATA_SUCCESS';
export const GET_TEST_DATA_REQUEST = 'GET_TEST_DATA_REQUEST';
export const GET_TEST_DATA_FAILURE = 'GET_TEST_DATA_FAILURE';

export const getTestAction = () => {
  console.log('Doing stuff');
  try {
    const testInfo = getTest();
    return {
      type: GET_TEST_DATA_SUCCESS,
      payload: 'THIS IS SOME DATA',
    };
  } catch (e) {
    console.log(e);
  }
};
