import { useEffect } from "react";
import { Container, Map } from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hook/useCharacter";

export function App() {
  const char = useCharacter()

  function handleKeyDown(event: KeyboardEvent){
    switch(event.code){
      case "ArrowUp":
      case "KeyW":
        char.moveUp()
      break
      case "ArrowDown":
      case "KeyS":
        char.moveDown()
      break
      case "ArrowLeft":
      case "KeyA":
        char.moveLeft()
      break
      case "ArrowRight":
      case "KeyD":
        char.moveRight()
      break
    }
  }

  useEffect(()=> {
    window.addEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Container>
        <Map>
          <Character x={char.x} y={char.y} side={char.side}/>
        </Map>
    </Container>
  )
}


