import Filho from "./complements/Filho/Filho";
import StyledGlobal, {CorpoApp} from "./styledGlobal";
import { useState } from "react";

function App() {

  const [state, setState] = useState("")
  function changeState() {
    setState("O estado foi atualizado!")
  }

  return (
    <>
    <StyledGlobal/>

      <CorpoApp>
        <p>App</p>
        {state}
        <Filho estado={changeState}/>
      </CorpoApp>
    </>
  );
}

export default App;
