//Macaron.js
// 클래스형 컴포넌트 생성의 단축키: rce(react component export)

// import React, { Component } from 'react'

// // Macaron은 우리가 만든 컴포넌트의 이름
// class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

// 함수형 컴포넌트 생성의 단축키:rfce
import React from 'react'

// function Macaron(props) { //app 컴포넌트에서 내보니진 데이터를 props라는 인수로 전달받음
//   console.log(props) // props는 객체
//   const {propsname, propsid, propsimage} = props // 구조분해할당: 객체의 속성들을 분해할 수 있다 
//   return (
//     <div>
//       <h1>No.{propsid}</h1> 
//       <h2>Name:{propsname}</h2>
//       <img src={propsimage} alt='' width={200} height={200}></img>
//     </div>
//   )
// }
function Macaron({propsname, propsid, propsimage}) { //제일 자주 쓰는 방법은 처음부터 구조분해할당 방식으로 데이터를 받는방법
  return (
    <div>
      <h1>No.{propsid}</h1> 
      <h2>Name:{propsname}</h2>
      <img src={propsimage} alt='' width={200} height={200}></img>
    </div>
  )
}

export default Macaron