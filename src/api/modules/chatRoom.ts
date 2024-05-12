import fetch from ".."

// 获取用户列表
export const reqAllChatRoomList = () => fetch('/manager/getAllChatRoom', { method: 'GET'});

// 修改聊天室权限
export const reqChangeChatRoomStatus = (data: Object) => fetch('/manager/changeChatRoomStatus', { method: 'POST', data});

// 获取聊天室聊天记录
export const reqGetChatRoomRecords = (data: Object) => fetch('/chatRoom/getChatRoomMessageRecord', { method: 'GET', params:data});
