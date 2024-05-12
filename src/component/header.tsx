import { Avatar } from 'antd'
import React from 'react'
import './css/component.css'
export default function header() {
    return (
        <div className='header_contain'>
            <div>
                <span className='header_title'>多功能聊天室后台管理系统</span>
            </div>
            <div>
                <Avatar size={45} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc0271e06-53c3-47f5-922d-1d06a6126172%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1715676490&t=f43a6e2a2f5655823b1be7ad1df1a23b" />
                <span className='header_username'>sky</span>
            </div>
        </div>
    )
}
