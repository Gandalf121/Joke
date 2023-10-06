import React from "react";
import {TJokeList} from "../../App"



  interface JokeListProps {
    items: TJokeList;
  }

 const CardJoke: React.FC<JokeListProps> = (items) => {
    return(
        <div>
            {items.items?.setup}
            {items.items?.setup}
        </div>
    )
}

export default CardJoke;