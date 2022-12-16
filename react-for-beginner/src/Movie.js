function Movie(){
    return <div>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2><h3>({movie.year})</h3>
            <h4>rating : {movie.rating}</h4>
            <p>{movie.summary}</p>
            <ul>
                {movie.geners.map((g) => <li key={g}>{g}</li>)}
            </ul>
    </div>;
}

export default Movie;