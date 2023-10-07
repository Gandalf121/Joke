import React,{useState} from "react";
import {TJokeList} from "../../App"
import { Box } from "@mui/material";
import "../card/card.css"



  interface JokeListProps {
    items: TJokeList;
  }

 const CardJoke: React.FC<JokeListProps> = (items) => {
  const [activeState, setActiveState] = useState<boolean>(false);
    return(
      <Box className="col-lg-3 col-md-3 col-sm-3 col-xs-6 cardContainer">
      <Box onClick={()=>{setActiveState(prev => !prev)}} className={`card ${activeState ? 'flipped' : ' '}`}>
        <Box className="front">{items.items?.setup}</Box>
        <Box className="back">
          <Box className="content">
            <h3 className="cardTitle">{items.items?.punchline}</h3>
            <br/>
            <p id="laugh"></p>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default CardJoke;