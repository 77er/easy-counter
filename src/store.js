import {observable,computed,action} from 'mobx'
class Counter {
    name='dq';
    @observable count=100
    @computed get double(){
        return this.count*2
    }
    @action.bound
    increment(){
        this.count++
    }
    @action.bound
    decrement(){
        this.count--
    }
}
const store=new Counter()
export default store