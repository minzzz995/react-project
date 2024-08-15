import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

// function component -> class component
export default class AppClass extends Component {

    // react에서 제공하는 lifecycle함수 중에 하나 = 생성자
    // constructor라는 생성자를 통해 컴포넌트를 생성할 때 만들어야 되는 state값(Object)을 정의함
    constructor(props){
        super(props);
        this.state={
            counter2: 0,
            num: 1,
            value: 0

        };
    }

    // setState라는 함수로 값을 한번에 정의
    increase = () => {
        this.setState({
            counter2:this.state.counter2 + 1,
            value:this.state.value + 1
        })
    };


  // state을 부르거나 함수를 부를 땐 this무조건 부르기(함수 = this.함수명 / state = this.state.객체이름)
  render() {
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}
