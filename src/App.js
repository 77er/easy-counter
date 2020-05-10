import React from 'react';
import {
    CounterBtn,
    CounterDisplay
} from './component'
import {connect } from 'react-redux'
import {decrement,increment} from './action/counter'

@connect(null,{decrement,increment})
class App extends React.Component {
    render(){
        return (
            <>
                <CounterBtn handelClick={this.props.decrement}>-</CounterBtn>
                <CounterDisplay/>
                <CounterBtn handelClick={this.props.increment}>+</CounterBtn>
            </>
        )
    }
}

export default App;
