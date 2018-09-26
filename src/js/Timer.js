import React, { Component } from 'react';
import '../css/timer.css';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        };
    }
    tick(){
        this.setState({seconds: this.state.seconds+1});
    }
    componentDidMount(){
        this.interval = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <div className={"timer"}>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

export default Timer;