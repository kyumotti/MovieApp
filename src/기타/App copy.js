// import Macaron from "./Macaron";
// import cakes from "./cakes.json" //배열울 변수에 저장

// function App() {
//   return (
//     <>
//     {/* 자식이 두개 이상이면 부모태그로 묶어줘야한다 */}
//       <div className="App"> 
//         "안녕하세요"
//       </div>
//       {/* 변수를 사용할때는 블럭{}과 함께 사용 */}
//       {cakes.map(cake => ( //배열의 각 요소(객체 하나하나)를 접근 
//         <Macaron //Macaron 컴포넌트를 자식 컴포넌트로 호출
//           propsid = {cake.id} //객체의 id 속성을 찾아서 내보낸다
//           propsname = {cake.name}
//           propsimage = {cake.images}
//         />
//       ))}
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Food from './Food';

// 클래스 컴포넌트에서 사용되는 사용주기 함수
export class App extends Component {
  constructor(props){
    super(props);
    console.log("constructor 함수는 클래스형 컴포넌트가 생성될때 호출됨 ")
  }

  componentDidMount(){
    console.log("componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate함수는 화면이 업덷이트 되면 실행되는 함수")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount 함수는 컴포넌트각 죽을때 실행되는 함수")
  }
  
  state={
    count: 0,
    sum:0,
    avg:0
  }
  add = () => {
    console.log("더하기")
    // this.state.count = 1;
    this.setState({count:1}) //state의 속성을 바꿔줄려면 setstate메소드 사용, setState을 사용해야지만 자동으로 render함수가 실행된다(생명주기)
    this.setState({count:this.state.count+1})
  }
  minus = () => {
    console.log("빼기")
    // this.state.count = -1;
    // this.setState({count:-1})
    // this.setState({count:this.state.count-1})
    this.setState(current =>({ //current는 this.state
      count:current.count-1,
      sum:current.sum -2,
      avg: current.avg -3,
    }))
  }

  render() {
    const {count, sum, avg} = this.state //앱의 state를 render안에서 사용할려면 구조 분해 할당을 해야한다
    return (
      <>
      <div>App</div>
      <div>
        <h1>현재 숫자는 {count} 입니다</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
      <Food/>
      </>
    )
  }
}

export default App