import { useState } from "react";
import Result from "./component/movie.jsx";
//import MovieNotFound from "./mocs/movieNotFound.jsx";

function App() {
  const [movie, setMovie] = useState() 
  function handleSubmite(params) {
    event.preventDefault();
   
    setMovie(movie)
  }


  return (
    <>
      <header>
        <form onSubmit={handleSubmite}>
          <label>Search Movie</label>
          <input 
          placeholder="Advanger, Harry Potter, Matrix"
          onChange={(e)=>setMovie(e.target.value)}></input>
          <button type="submite" >Search</button>
        </form>
      </header>
      <main>
        <Result movieSearched={movie}/>
      </main>
    </>
  );
}

export default App;
