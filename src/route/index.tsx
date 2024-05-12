// routes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/home';
import UserPage from '../component/userPage';
import ChatRoomPage from '../component/chatRoomPage';
import ChatRoomMessage from '../component/modal/ChatRoomMessage';


const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" element={<Home />} >
        <Route path='/home/userPage' element={<UserPage/>}></Route>
        <Route path='/home/chatRoomPage' element={<ChatRoomPage/>}></Route>
        <Route path='/home/chatRoomMessage' element={<ChatRoomMessage/>}></Route>
    </Route>
  </Routes>
);

export default AppRoutes;
