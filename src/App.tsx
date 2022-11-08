import { Container, Map } from "./App.styles";
import { Character } from "./components/Character";

export function App() {
  return (
    <Container>
        <Map>
          <Character x={5} y={0}/>
        </Map>
    </Container>
  )
}


