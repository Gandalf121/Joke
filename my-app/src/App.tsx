import React, { useState, useEffect } from "react";
import { getJoke } from "./axios/getJoke";
import CardJoke from "./component/card/Card";
import Buttons from "./component/button/Button";
import { IJoke } from "./interfaces/IJoke";
import "./App.css";

export type TJokeList = IJoke;

function App() {
  const [jokes, setJokes] = useState<TJokeList>();
  const [next, setNext] = useState<boolean>(false);

  function callBack() {
    return setNext(!next);
  }

  useEffect(() => {
    getJoke()
      .then((response: any) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [next]);

  return (
    <>
      <CardJoke items={jokes!} />
      <Buttons state={callBack} />
    </>
  );
}

export default App;
