import React from "react";
import { useParams } from 'react-router-dom';

const MovieForm = ( history ) => {
  let params = useParams();
  console.log(params.id, history);
  return (
    <div>
      <h1>Movie Form {params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
