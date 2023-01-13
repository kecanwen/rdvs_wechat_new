import React, {FC, Fragment, useEffect, useRef, useState} from 'react'
import '../../styles/firstPage.scss'
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import instance from "../../server/http-server";
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import bonus from '../../asserts/imgs/firstPage/ticheng.png'
import group from '../../asserts/imgs/firstPage/Group.png'
import group18 from '../../asserts/imgs/firstPage/Group18.png'
import smallNoData from '../../asserts/imgs/firstPage/smallnoData.png'
interface ImageInterface {
    imgURL:string
}
function FirstPage() {
    const [swiperList,setSwiperList] = useState<ImageInterface[]>([]);
    useEffect(() => {
        carouselList();
    }, []);
    const swiperItems = swiperList.map((item, index) => (
        <Swiper.Item key={index}>
            <div
                className='FirstPage_content'
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                <img src={`http://ossbi.deppon.com/oss-demo/queryImgString.do?fileName=${item['imgURL']}`} alt=""/>
            </div>
        </Swiper.Item>
    ));
    const BonusCom = () => {
        return <Fragment>
            <div className='bonusBox'>
                <div className='royalty'>
                    <div className="title">
                        <img alt="" src={bonus}/>
                        <i>提成</i>
                    </div>
                    <div className='left name'>
                        <span className='number'>2733.13</span>
                        <span className='write'>当月提成</span>
                    </div>
                    <div className='right name'>
                        <span className='number'>2733.13</span>
                        <span className='write'>上月提成</span>
                    </div>
                </div>
            </div>
        </Fragment>
    };
    interface titleFace {
        title:string
    }
    const Subtitle: React.FC<titleFace> = ({title}) =>{
      return <Fragment>
          <div className='subtitle'>{title}</div>
      </Fragment>
    };
    const RecordCom = () => {
        return   <Fragment>
            <div className='recordWrap'>
                <div className='record record1'>
                    <div className='img'>
                        <img alt="" src={group}/>
                    </div>
                    <div className='recordWrap_content'>
                        <div className='top'>
                            <span className='title'>开单票数</span>
                            <span className='rank'>第1</span>
                        </div>
                        <div className='bottom'>
                            -
                        </div>
                    </div>
                </div>
                <div className='record record2'>
                    <div className='img'>
                        <img alt="" src={group18}/>
                    </div>
                    <div className='recordWrap_content'>
                        <div className='top'>
                            <span className='title'>开单票数</span>
                            <span className='rank'>第1</span>
                        </div>
                        <div className='bottom'>
                            -
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    };
    const FunctionWrap = () => {
      return   <Fragment>
          <div className='functionWrap'>
              <div className='function function1'>
              </div>
              <div className='function function2'>
              </div>
              <div className='function function3'>
              </div>
          </div>
      </Fragment>
    };
    const  EmptyTip = () =>{
        return   <Fragment>
            <div className='EmptyTip'>
                <img alt="" src={smallNoData}/>
            </div>
        </Fragment>
    };
    const carouselList = () => {
        instance.get('app/titleBar/list.do', {
            params: {
                beginNum: 1,
                endNum: 15,
                active: 'Y',
                picType: 1
            }
        }).then(res => {
            let list  = res.data && res.data[0].list || [];
            setSwiperList(list || []);
        })
    };
    return (<Fragment>
        <Swiper autoplay loop>{swiperItems}</Swiper>
        <div className="contentView">
            <BonusCom/>
            <Subtitle title='快捷方式'/>
            <FunctionWrap/>
            <Subtitle title='今日战绩'/>
            <RecordCom/>
            <Subtitle title='差错'/>
            <EmptyTip/>
            <Subtitle title='工单'/>
            <EmptyTip/>
        </div>
    </Fragment>)
}

export default FirstPage;