import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const [ movie, setMovie ] = useState({});
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(r => r.json())
    .then(dbMovie => setMovie({...dbMovie}));
  }, []);

  console.log(JSON.stringify(movie) === '{}')

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        { movie.title ? // can't just write movie here because of how objects work
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time + " minutes"}</p>
            {movie.genres.map(genre => <span>{genre}</span>)}
          </> : <>Loading...</>
        }
      </main>
    </>
  );
};

export default Movie;
