import { Container, Map } from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hook/useCharacter";

export function App() {
  const char = useCharacter()

  return (
    <Container>
        <Map>
          <Character x={char.x} y={char.y}/>
        </Map>
    </Container>
  )
}


