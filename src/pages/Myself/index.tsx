import React, {Fragment,FC } from "react";
import '../../styles/myself.scss'
import male from '../../asserts/imgs/myself/male.jpg'
import Group19 from '../../asserts/imgs/myself/Group19.png'
import {cardListSummary} from "../../unit/constants";
function Myself() {
  const RoleIntroduce = () =>{
    return <Fragment>
      <div className="roleIntroduce">
        <div className="roleIntroduceContent">
          <div className="headSculpture">
            <img src={male} alt=""/>
          </div>
          <div className="hearRight">
            <p className="header-p header-p1">
              <span>余雷</span>
              <span>336745</span>
            </p>
            <p className="header-p">
              <span>上海青浦区徐泾快递点部（已撤销）</span>
            </p>
            <p className="header-img">
              <img src={Group19}/>
              <span>入职738534天</span>
              </p>
          </div>
        </div>
      </div>
    </Fragment>
  };

  const FunctionBall = (props:ballInterface)=>{
    return <Fragment>
      <div className="FunctionBall">
        <h4 className='title'>{props.mainTitle}</h4>
        <div className="content-content">
          {
            props.cardList.map((ite, idx) => {
              return <div className="contentSpan" key={idx}>
                <img src={ite.url} alt=""/>
                <b>{ite.name}</b>
              </div>
            })
          }
        </div>
      </div>
    </Fragment>
  };
  return (<div className='Myself'>
    <RoleIntroduce/>
    <div className='myselfContent'>
      {
        cardListSummary.map((item,index)=>{
          return  <FunctionBall key={index} mainTitle={item.mainTitle} cardList={item.cardList}/>
        })
      }
    </div>
  </div>)
}
export default Myself;