import React from 'react';
import {
    CounterBtn,
    CounterDisplay
} from './component'
import {observer,inject} from 'mobx-react'
@inject('counter')
@observer
class App extends React.Component {
    // componentWillReact(){
    //     console.log("componentWillReact,I will re-render, since the todo has changed!");
    // }
    render(){
        // console.log(this.props);
        return (
            <>
                <CounterBtn handelClick={this.props.counter.decrement}>-</CounterBtn>
                <CounterDisplay/>
                <CounterBtn handelClick={this.props.counter.increment}>+</CounterBtn>
            </>
        )
    }
}

export default App;
