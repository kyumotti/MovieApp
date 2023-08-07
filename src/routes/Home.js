import React, { Component } from 'react'
import axios from 'axios';
import Movie from  "../components/Movie"
import "../styles/Home.css"

export class Home extends Component {
  state = {
    isLoading:true,
    movies:[]
  }

  getMovies = async() => { //async와 await을 적용할려면 함수를 이용하여 데이터를 가지고와야함
    const {data:{data:{movies}}}= await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); 
    console.log("movies",movies);
    this.setState({isLoading:false, movies:movies}) //키:키값의 이름이 동일하면 하나만 적어도 무방
  }
  componentDidMount(){ //영화 데이터 불러오기
    // setTimeout(() => { // 6초 뒤에 state의 속성을 false로 바꾸기 
    //   this.setState({isLoading:false})
    // },6000)
    this.getMovies();
  }


  render() {
    const {isLoading, movies} = this.state // 구조분해할당
    return (
      <section className='container'>
        {/* 삼합연산자: isLoading이 true면 loader가 나오고 false면 movies가 나온다 */}
        {isLoading ?<div className='loader'>  
          <span className='loader_text'>Loading...</span>
        </div> 
        : 
        <div className='movies'>
          {movies.map((movie,index) => (
            <Movie
              key = {index}
              propsid = {movie.id}
              propsimage = {movie.medium_cover_image}
              propstitle = {movie.title}
              propsyear = {movie.year}
              propsgenre = {movie.genres}
              propssummary = {movie.summary}
            />
          ))}

        </div>}

      </section>

    )
  }
}

export default Home