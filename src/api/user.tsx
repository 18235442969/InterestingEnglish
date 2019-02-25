import service from '../model/service'

interface getUserInfoData {
  name: string
}

interface getUserData {
  name: string
}

const getUserInfo = ({name}: getUserInfoData) => {
  let data = {
    name
  };
  return service.post('/todoList', data);
}

const getUser = ({name}: getUserData) => {
  let data = {
    name
  };
  return service.post('/user', data);
}

export {
  getUserInfo,
  getUser
};