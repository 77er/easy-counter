import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
// @inject('counter')
@inject((store)=>{
    return{
        count:store.counter.count,
        double:store.counter.double,
    }
})
@observer
class CounterDisplay extends Component{
    render(){
        // console.log(this.props);
        return(
            <div>
                <div>原数：{this.props.count}</div>
                <div>double：{this.props.double}</div>
            </div>
        )
    }
}
export default CounterDisplay