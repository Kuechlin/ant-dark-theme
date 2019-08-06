import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Tables from './components/Tables';
import Modals from './components/Modals';
import TabsTest from './components/TabsTest';
import LayoutTest from './components/LayoutTest';
import Menus from './components/Menus';
import Cards from './components/Cards';
import Alerts from './components/Alerts';
import './dark.less';
import { Divider } from 'antd';

function Root() {
    return (
        <LayoutTest>
            <Divider>Buttons</Divider>
            <Buttons />
            <Divider>Inputs</Divider>
            <Inputs />
            <Divider>Tables</Divider>
            <Tables />
            <Divider>Modals</Divider>
            <Modals />
            <Divider>Alerts</Divider>
            <Alerts />
            <Divider>TabsTest</Divider>
            <TabsTest />
            <Divider>Menus</Divider>
            <Menus />
            <Divider>Cards</Divider>
            <Cards />
        </LayoutTest>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));