import service from '../model/service'
import { IUserInfoParams, IUserParams } from '../model/types/api/user';

const getUserInfo = ({name}: IUserInfoParams) => {
  let data = {
    name
  };
  return service.post('/todoList', data);
}

const getUser = ({name}: IUserParams) => {
  let data = {
    name
  };
  return service.post('/user', data);
}

export {
  getUserInfo,
  getUser
};