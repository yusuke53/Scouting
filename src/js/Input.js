import React, { Component } from 'react';
import '../css/input.css';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number : '',
            shot : '',
            GB : '',
            miss : ''
        }

    }
    render() {
        return (
            <div className="unput">
                <h3>inputだよ</h3>
                <table border="1">
                    <tr>
                        <th>背番号</th><th>shot</th><th>GB</th><th>miss</th>
                    </tr>
                    <tr>
                        <td>1</td><td>3</td><td>5</td><td>5</td>
                    </tr>
                    <tr>
                        <td>null</td><td>null</td><td>null</td><td>null</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Input;
