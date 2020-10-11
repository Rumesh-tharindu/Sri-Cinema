import React from 'react'
import './movieCard.css'

function MovieCard({movie}) {
    console.log(movie.name)
    return (
        <div>
            <div className="movie-card" key={movie.id}>
            <div className="card-image">
             <img src={process.env.PUBLIC_URL + movie.img} className="img-fluid"  alt="" srcset=""/>
            </div>   
            <div className="card-info">
              <h1>{movie.name}</h1>
               <p><i class="fas fa-tag"></i>{movie.price}</p>
               <p><i class="far fa-clock"></i> {movie.duration}</p>
            </div>
        </div>
        </div>
    )
}

export default MovieCard
