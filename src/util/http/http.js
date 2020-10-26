import axios, {AxiosInstance, AxiosPromise} from 'axios';

const url = 'http://sub1.bfs-dev.com:3001/';

const test = 'http://localhost:3000/setup/plan_types';
const test1 = 'http://localhost:3000/api/v1/insights/insights_settings';

export const get = () => {
  //TODO
};

export const post = () => {
  //TODO
};

export const getTest = () => {
  console.log('get test!!');
  axios
    .get(test1) //put your end point here!
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
