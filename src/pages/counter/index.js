import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        number: 0
    }

    increase = () => {

        const { number } = this.state;

        this.setState({
            number: number + 1
        });
    }

    render() {

        return (<div>
            <h1>{this.state.number} </h1>
            <button onClick={this.increase}>Incrementar</button>
        </div>);
    }
}