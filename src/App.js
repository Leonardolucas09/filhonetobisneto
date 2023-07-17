import { useState } from "react";

function App() {

  const [inputNome, setinputNome] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  function mudarEstadoNome(event) {
    setinputNome(event.target.value)

  }

  function mudarEstadoEmail(event) {
    setInputEmail(event.target.value)
  }

  return (
    <>
    <input type="text" placeholder="Nome" value={inputNome} onChange={mudarEstadoNome}/>
    

    <input type="email" placeholder="senac@com.br" value={inputEmail} onChange={mudarEstadoEmail}/>

    {inputNome}
    {inputEmail}
    </>

  );
}

export default App;
