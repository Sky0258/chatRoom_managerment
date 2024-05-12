import fetch from ".."

// 获取用户列表
export const reqAllUserList = () => fetch('/manager/getAllUsers', { method: 'GET'});
// 根据用户 ID 获取好友列表
// export const reqFriendList = (data: Object) => fetch('/user/getFriendList', { method: 'GET', params: data});