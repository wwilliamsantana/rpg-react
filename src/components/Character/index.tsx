import { CharacterSides } from "../../hook/useCharacter";
import { Container, Nickname } from "./styles";

interface Props{
  x: number
  y: number
  side: CharacterSides
  name: string
}

export function Character({x, y, side, name}: Props){
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
    <Nickname>
     {name}
    </Nickname>
      
    </Container>
  )
}