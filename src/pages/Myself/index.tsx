import React, {Fragment,FC } from "react";
import '../../styles/myself.scss'
import male from '../../asserts/imgs/myself/male.jpg'
import Group19 from '../../asserts/imgs/myself/Group19.png'
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
  interface ballInterface{
    title:string,
    list:Array<string>
  }
  const FunctionBall:FC = ()=>{
    return <Fragment>

    </Fragment>
  };
  return (<div className='Myself'>
    <RoleIntroduce/>
    <div className='myselfContent'>

    </div>
  </div>)
}
export default Myself;