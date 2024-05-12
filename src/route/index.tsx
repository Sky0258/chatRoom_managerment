// routes.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../page/login'
import Home from '../page/home';
import UserPage from '../component/userPage';
import ChatRoomPage from '../component/chatRoomPage';
import ChatRoomMessage from '../component/modal/ChatRoomMessage';


const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}>
            <Route path='userPage' element={<UserPage />}></Route>
            <Route path='chatRoomPage' element={<ChatRoomPage />}></Route>
            <Route path='chatRoomMessage' element={<ChatRoomMessage />}></Route>
        </Route>
    </Routes>
);

export default AppRoutes;
