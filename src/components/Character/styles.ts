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