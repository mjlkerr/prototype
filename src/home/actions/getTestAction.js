import {getTest} from '../../util/http';

export const getTestAction = () => {
  try {
    const testInfo = getTest();
    //dispatch stuff here
  } catch (e) {
    console.log(e);
  }
}