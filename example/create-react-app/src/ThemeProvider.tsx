import React, { useState } from 'react';
import { Icon } from 'antd';

const item = 'app-dark-theme'
const is_dark = () => localStorage.getItem(item) === null ? false : true;
const set_dark = () => localStorage.setItem(item, 'true');
const set_light = () => localStorage.removeItem(item);

type State = {
    dark: boolean;
}
export default class Theme extends React.Component<{}, State> {
    state: State = {
        dark: is_dark()
    }

    link: HTMLLinkElement;

    constructor(props: any) {
        super(props);
        this.link = document.createElement('link');
        this.link.rel = "stylesheet";
        document.head.appendChild(this.link);

        let dark = is_dark();
        this.state = { dark };
        this.updateTheme(dark);
    }

    handleClick = () => {
        if (this.state.dark) {
            this.setState({ dark: false });
            set_light();
            this.updateTheme(false);
        } else {
            this.setState({ dark: true });
            set_dark();
            this.updateTheme(true);
        }
    }

    updateTheme = (dark: boolean) => {
        if (dark) {
            this.link.href = "dark.min.css";
        } else {
            this.link.href = "light.min.css";
        }
    }

    render() {
        const { dark } = this.state;
        return (
            <div style={style} onClick={this.handleClick}>
                <Icon type="bulb" theme={dark ? "outlined" : "filled"} />
            </div>
        );
    }
}
const style: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: 'white',
    fontSize: '24px',
    lineHeight: '24px',
    cursor: 'pointer'
}