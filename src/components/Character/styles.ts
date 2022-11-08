import styled from "styled-components";
import { CharacterSides } from "../../hook/useCharacter";

interface CharacterProps{
  size: number
  left: number
  top: number
  side: number
}

export const Container = styled.div<CharacterProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url("./src/assets/char.png");
  background-position: 0px ${props => props.side}px;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

`

export const Nickname = styled.div`
  background: rgba(255, 255, 255, 0.3);
  width: 60px;
  height: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  top: -15px;
  left: -15px;

  font-size: 10px;
  color: black;
  font-weight: 700;
  text-transform: uppercase;

  
  

`