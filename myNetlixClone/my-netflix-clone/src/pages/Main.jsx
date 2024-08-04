import React from 'react'
import requests from "../Requests"
import axios from 'axios';
import { useEffect, useState } from 'react'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect (() => {
        axios.get(requests.requestPopular).then((response)=> {
            setMovies(response.data.results)
        })
    },[])
    console.log(movie)

    return (
        <div className='w-full h-[600px]'>
          <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <img
              className='w-full h-full object-none'
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}/>
              <div>
                <button>Play</button>
                <button>Watch Later</button>

              </div>
            </div>
        </div>
        );
};

export default Main