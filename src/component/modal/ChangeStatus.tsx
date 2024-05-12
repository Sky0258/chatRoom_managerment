import { Radio, RadioChangeEvent } from 'antd'
import React, { useEffect, useState } from 'react'
import '../css/component.css'

export default function ChangeStatus({handleChangeStatus, status, title}: any) {
    const [value, setValue] = useState(status);

    useEffect(() => {
        setValue(status);
    }, [status]);

    const onChange = (e: RadioChangeEvent) => {
      setValue(e.target.value);
      handleChangeStatus(e.target.value);
    };
  
    return (
        <div className='change_modal_contain'>
           <span className='change_modal_title'>{title} 权 限： </span>
            <Radio.Group onChange={onChange} value={value} >
                <Radio value={0} style={{margin: "7px 0"}}>启 用 该 {title}</Radio><br></br>
                <Radio value={1}>禁 用 该 {title}</Radio>
            </Radio.Group>
        </div>
    )
}
