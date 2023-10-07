import MovieMock from "../mocs/movieFound"

export default function Movie({movieSearched}) {
    const movie = MovieMock.Search;
    console.log(movieSearched);
    return(
        <>
        {movie ? (
            <ul>
              {movie.map((movie) => (
                <li key={movie.imdbID}>
                  <h1>{movie.Title}</h1>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))}
            </ul>
          ) : (
            <h1>Movie Not Found</h1>
          )}
          </>
    )
}
 