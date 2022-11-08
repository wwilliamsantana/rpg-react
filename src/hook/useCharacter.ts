import { useState } from "react";


export type CharacterSides = "down" | "up" | "left" | "right"

export function useCharacter(){
  const [pos, setPos] = useState({x:3, y:5})
  const [side, setSide] = useState<CharacterSides>("down")

 function moveLeft(){
  setPos(pos => ({
    x: pos.x - 1,
    y: pos.y
  }))
  setSide("left")
 }
 function moveRight(){
  setPos(pos => ({
    x: pos.x + 1,
    y: pos.y
  }))
  setSide("right")
 }
 function moveDown(){
  setPos(pos => ({
    x: pos.x,
    y: pos.y + 1
  }))
  setSide("down")
 }
 function moveUp(){
  setPos(pos => ({
    x: pos.x,
    y: pos.y - 1
  }))
  setSide("up")
 }



  return{
    x: pos.x,
    y: pos.y,
    moveDown,
    moveUp,
    moveLeft,
    moveRight,
    side
  }
}