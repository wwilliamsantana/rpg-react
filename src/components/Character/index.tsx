import { CharacterSides } from "../../hook/useCharacter";
import { Container } from "./styles";

interface Props{
  x: number
  y: number
  side: CharacterSides
}

export function Character({x, y, side}: Props){
  const size = 30

  const valueSide = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }


  return (
    <Container
      left={x * size}
      top={y * size}
      size={size}
      side={valueSide[side]}
    >
      
    </Container>
  )
}