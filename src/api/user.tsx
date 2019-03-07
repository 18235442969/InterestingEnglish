import service from '../model/service'
import translateService from '../model/translateService'
import { IUserInfoParams, IUserParams } from '../model/types/api/user';

interface TranslateParams{
  w: string,
  type: string
}

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

const translate = ({w, type}: TranslateParams) => {
  let data = {
    w,
    type,
    key: '992E541DC16BA12E9F99EDF3A8B2FB1B'
  };
  return translateService.get('', {
    params: data
  });
}

export {
  getUserInfo,
  getUser,
  translate
};