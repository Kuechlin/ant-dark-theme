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

function Root() {
    return (
        <LayoutTest>
            <Buttons />
            <Inputs />
            <Tables />
            <Modals />
            <Alerts />
            <TabsTest />
            <Menus />
            <Cards />
        </LayoutTest>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));