import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [ directors, setDirectors ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(dbDirectors => setDirectors(dbDirectors));
  }, []);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        { directors[0] ? 
          directors.map(director => <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul>
          </article>) : <>Loading...</>
        }
      </main>
    </>
  );
};

export default Directors;
