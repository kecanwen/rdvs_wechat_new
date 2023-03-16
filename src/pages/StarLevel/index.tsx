import React, {useState} from "react";
import '../../styles/starLevel.scss'
import {DownOutline} from "antd-mobile-icons";
import {Button, DatePicker, Space, Toast} from 'antd-mobile'

const now = new Date();
const dayjs = require('dayjs')

function StarLevel() {
    const Date_picker = () => {
        const [visible, setVisible] = useState(false);
        const [curTime, setCurTime] = useState(()=>{
            return dayjs(new Date()).format('YYYY-MM')
        });
        return <div className='datePicker flex-center'>
            <div className='datePickerText' onClick={()=>{setVisible(true)}}>
                <span className='datePickerSpan'>{curTime}</span>
                <DownOutline/>
            </div>
            <DatePicker
                title='选择时间'
                precision='month'
                visible={visible}
                onClose={() => {
                    setVisible(false)
                }}
                max={now}
                onConfirm={val => {
                    let curTime = dayjs(val).format('YYYY-MM');
                    setCurTime(curTime);
                }}
            />
        </div>
    };
    return (<div className='StarLevel'>
        <Date_picker/>
    </div>)
}

export default StarLevel;