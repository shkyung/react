import React, { Component } from 'react';

class Timer extends React.Component {
    constructor(props) {
        console.error("Timer constructor!! props : ", props);
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        console.error("component Did Mount");
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.error("component Will Unmount");
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

export default Timer;
