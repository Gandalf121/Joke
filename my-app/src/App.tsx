import React, {useState, useEffect} from 'react';
import {getJoke} from "./axios/getJoke"
import CardJoke from "./component/card/Card"
import './App.css';



interface Joke {
  id: number;
  type: string;
  setup:string;
  punchline:string;
}
export type TJokeList = Joke;

function App() {

   const [jokes ,setJokes] = useState<TJokeList>();
   const [next,setNext]=useState<boolean>(false);

  useEffect(() => {
      getJoke().then((response : any) => {
        console.log(response.data)
        setJokes(response.data)
      }).catch((error)=>{
        console.log(error)
      });
  }, [next]);
  
  return (
    <div>
      <CardJoke items={jokes!}/>
      <button onClick={()=>{setNext(!next)}}>next</button>
    </div>
  );
}

export default App;
