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
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChangeNumber(e){
        this.setState({number: e.target.value});
    }

    addshot(){
        this.setState({shot: this.state.shot+1});
        console.log("aaaa");
    }
    addGB(){
        this.setState({miss: this.state.miss+1});
    }
    addmiss(){
        this.setState({miss: this.state.miss+1});
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
                        <td>{this.state.number}</td><td>{this.state.shot}</td><td>{this.state.GB}</td><td>{this.state.miss}</td>
                    </tr>
                </table>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="number">背番号</label>
                    <input type="text" name="number" value={this.state.number} onChange={this.handleChangeNumber} />

                    <input type="checkbox" name="play" value="shot" onClick={()=>this.addshot} />shot
                    <input type="checkbox" name="play" value="GB" onClick={()=>this.addGB} />GB
                    <input type="checkbox" name="play" value="miss" onClick={()=>this.addmiss} />miss

                    <button type="submit">送信</button>
                </form>
            </div>
        );
    }
}

export default Input;
