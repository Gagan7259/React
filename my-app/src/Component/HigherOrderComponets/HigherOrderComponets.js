import React, { Component } from 'react'
import UpdateComponent from '../HOP/WithCounter'
class HigherOrderComponets extends Component {


    render() {
        const { increMent, count } = this.props;

        return (
            <button onClick={increMent}>
                clicked {count} Times
            </button>
        )
    }
}

export default UpdateComponent(HigherOrderComponets)
