import React from 'react'
import './movieCard.css'
import MovieCard from './MovieCard'
function MovieCards() {
    const movieList=[
        {   
            id:1,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:2,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:3,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:4,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:5,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:6,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:1,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:2,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:3,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:4,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:5,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        },
        {   
            id:6,
            name:"Rush",
            img:"/images/frozen.jpg",
            price:"RS 250.00",
            year:"2019",
            duration :"1 hr 30 min"

        }
    ]
    
    return (
        <div className="container">
        <div className="movie-cards">
         {movieList.map((movie)=>{
             return  <MovieCard movie={movie} />
         })}
        </div>
        </div>
        
    )
}

export default MovieCards
