import { Container } from "./styles";

interface Props{
  x: number
  y: number
}

export function Character({x, y}: Props){
  const size = 30

  return (
    <Container
      left={x * size}
      top={y * size}
      size={size}
    >
      
    </Container>
  )
}