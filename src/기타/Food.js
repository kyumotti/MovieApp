import React, { Component } from 'react'

export class Food extends Component {
  state = {
    price:10000,
    discountPrice:0
  }
  discount = ()=> {
    this.setState({discountPrice:this.state.price*0.7})
  }
  render() {
    const {price, discountPrice} = this.state
    return (
      <>
      <div>Food</div>
      <h1>food 가격:{price}</h1>
      <h2>할인 가격:{discountPrice}</h2>
      <button onClick={this.discount}>할인</button>
      </>
    )
  }
}

export default Food