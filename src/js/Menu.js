import React, { Component } from 'react';
import '../css/menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <a>データ一覧</a>
                <a>データ入力</a>
            </div>
        );
    }
}

export default Menu;