import Mock from 'mockjs';

Mock.mock('/user', {
  'success': true,
  'code': 0,
  'data': {
    'user': 'hzy'
  },
  'message': '操作成功',
  'systemDate': new Date().getTime()
});