import React,{Component} from 'react'
import { connect } from 'react-redux'
const mapStateToProps=state=>({
  count:state.counter.count
})
@connect(mapStateToProps)
class CounterDisplay extends Component{
    render(){
        return(
            <div>
                {this.props.count}
            </div>
        )
    }
}
export default CounterDisplay