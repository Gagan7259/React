import React, { Component } from 'react';

export class Message extends Component {

    constructor() {
        super();
        this.state = {
            Message: "Hey Visitor"
        }
    }
    changeMessage() {
        this.setState({
            Message: "Get Out "

        })
    }

    render() {
        return (
            <div>
                <h1 >{this.state.Message}</h1>
                <button onClick={() => {
                    this.changeMessage()
                }}>click Here</button>

            </div>
        )
    }
}

export default Message;
