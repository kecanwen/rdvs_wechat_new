import React, {useState} from "react";
import '../../styles/starLevel.scss'
import {DownOutline, InformationCircleOutline, RightOutline, StarOutline} from "antd-mobile-icons";
import {Button, DatePicker, ProgressBar, Toast} from 'antd-mobile'
import {FEEDBACK1,FEEDBACK2,FEEDBACK3,FEEDBACK4} from '../../unit/constants'
const now = new Date();
const dayjs = require('dayjs');

function StarLevel() {
    const Date_picker = () => {
        const [visible, setVisible] = useState(false);
        const [curTime, setCurTime] = useState(() => {
            return dayjs(new Date()).format('YYYY-MM')
        });
        return <div className='datePicker flex-center'>
            <div className='datePickerText' onClick={() => {
                setVisible(true)
            }}>
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

    const StarDetailContent = (props:detailContent) => {
        return <div className='StarDetailContent'>
            <div className="starLeft">
                <span className="starLeftTitle">{props.left}</span>
                <InformationCircleOutline/>
            </div>
            <div className="starRight">
                <span className="starRightText">{props.right}</span>
                <RightOutline/>
            </div>
        </div>
    };

    const GradeCom = () => {
        const [overItemTargetList,setOverItemTargetList] = useState([
            {name:'业务技能',score:11},
            {name:'客诉客评',score:31},
            {name:'学习成长',score:51},
            {name:'价值贡献',score:61},
            {name:'领导评价',score:91}
        ]);
        return <div className='GradeCom'>
            <div className="gradeComLeft">
                <p className="score">
                    <span className='scoreNum'>--</span>
                    <span className='unit'>分</span>
                </p>
                <p className="starOutline">
                    <StarOutline/>
                    <StarOutline/>
                    <StarOutline/>
                    <StarOutline/>
                    <StarOutline/>
                </p>
                <p className="send-in send_yellow">
                    <span className="send-txt">收派系数:0</span>
                    <span className="send-img">
                          <RightOutline/>
                    </span>
                </p>
            </div>
            <div className="gradeRight">
                <ul>
                    {overItemTargetList.map((item,index)=>{
                        return  <li key={index}>
                            <div className='name'>{item.name}</div>
                            <div className='score'>
                                <ProgressBar percent={item.score} />
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    };

    const FeedBack = ()=>{
        const [feedbackList,setFeedbackList] = useState([
            {name:'星级反馈',img:FEEDBACK1},
            {name:'学习成长',img:FEEDBACK2},
            {name:'价值贡献',img:FEEDBACK3},
            {name:'领导评价',img:FEEDBACK4}
        ]);
      return <div className="FeedBack">
          {
              feedbackList.map(item=>{
                  return  <div className="feedbackItem">
                      <div>
                          <img src={item.img} alt=""/>
                          <p>{item.name}</p>
                      </div>
                      <div></div>
                  </div>
              })
          }
      </div>
    };

    return (<div className='StarLevel'>
        <div className="StarLevelTop">
            <Date_picker/>
            <StarDetailContent left='本月星级' right='星级明细'/>
            <GradeCom/>
            <FeedBack/>
        </div>
        <div className="StarLevelBottom">
            <StarDetailContent left='我的排名-名' right='更多排名'/>
        </div>
    </div>)
}

export default StarLevel;