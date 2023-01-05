import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import styles from './homePage.less'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import FirstPage from "./FirstPage";
import Myself from "./Myself";
import Commission from "./Commission";
import StarLevel from "./StarLevel";

const Bottom: FC = ()=>{

};
function HomePage() {
  return (<div>
    <Router initialEntries={['/']}>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={styles.body}>
            <Switch>
                <Route exact path='/home'>
                    <FirstPage />
                </Route>
                <Route exact path='/todo'>
                    <Commission />
                </Route>
                <Route exact path='/message'>
                    <StarLevel />
                </Route>
                <Route exact path='/me'>
                    <Myself />
                </Route>
            </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  </div>)
}
export default HomePage;