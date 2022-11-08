import { useState } from "react";
import { mapSpots } from "../data/mapSpots";


export type CharacterSides = "down" | "up" | "left" | "right"

export function useCharacter(nameProp: string){
  const [name, setName] = useState(nameProp)
  const [pos, setPos] = useState({x:3, y:5})
  const [side, setSide] = useState<CharacterSides>("down")

 function moveLeft(){
  setPos(pos => ({
    x: canMove(pos.x -1, pos.y) ? pos.x - 1 : pos.x,
    y: pos.y
  }))
  setSide("left")
 }
 function moveRight(){
  setPos(pos => ({
    x: canMove(pos.x +1, pos.y) ? pos.x + 1 : pos.x,
    y: pos.y
  }))
  setSide("right")
 }
 function moveDown(){
  setPos(pos => ({
    x: pos.x,
    y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
  }))
  setSide("down")
 }
 function moveUp(){
  setPos(pos => ({
    x: pos.x,
    y:  canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
  }))
  setSide("up")
 }

function canMove(x: number, y: number){
    if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
        if(mapSpots[y][x] === 1){
          return true
        }
    }
    return false
}



  return{
    x: pos.x,
    y: pos.y,
    moveDown,
    moveUp,
    moveLeft,
    moveRight,
    side,
    name,
  }
}