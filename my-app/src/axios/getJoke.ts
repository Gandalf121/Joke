import axios from "axios";


export function getJoke (){
   return axios.get('https://official-joke-api.appspot.com/random_joke');
} 

