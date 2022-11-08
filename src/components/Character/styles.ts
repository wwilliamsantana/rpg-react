import styled from "styled-components";

interface CharacterProps{
  size: number
  left: number
  top: number
}

export const Container = styled.div<CharacterProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: red;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

`