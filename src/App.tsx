import React, {FC} from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import './App.css';
import './styles/homePage.scss'
import NoMatch from "./pages/NoMatch";
import FirstPage from "./pages/FirstPage";
import Myself from "./pages/Myself";
import StarLevel from "./pages/StarLevel";
import Commission from "./pages/Commission";
import {AppOutline, MessageOutline, UnorderedListOutline, UserOutline} from "antd-mobile-icons";
import {TabBar} from "antd-mobile";

const Bottom: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const setRouteActive = (value: string) => {
        navigate(value);
    };

    const tabs = [
        {
            key: '/FirstPage',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/Commission',
            title: '提成奖金',
            icon: <MessageOutline />,
        },
        {
            key: '/StarLevel',
            title: '星级考核',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/Myself',
            title: '我',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
};
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>
                    <Route path="/404" element={<NoMatch/>}/>
                    <Route path="/FirstPage" element={<FirstPage/>}/>
                    <Route path="/Commission" element={<Commission/>}/>
                    <Route path="/StarLevel" element={<StarLevel/>}/>
                    <Route path="/Myself" element={<Myself/>}/>
                </Routes>
                <div className='bottomTabBar'>
                    <Bottom />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
