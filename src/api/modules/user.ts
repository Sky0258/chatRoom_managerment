import fetch from ".."

// 获取用户列表
export const reqAllUserList = () => fetch('/manager/getAllUsers', { method: 'GET'});

// 修改用户权限
export const reqChangeUserStatus = (data: Object) => fetch('/manager/changeUserStatus', { method: 'POST', data});
