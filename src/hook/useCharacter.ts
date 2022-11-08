import { useState } from "react";

export function useCharacter(){
  const [pos, setPos] = useState({x:3, y:5})

  return{
    x: pos.x,
    y: pos.y
  }
}