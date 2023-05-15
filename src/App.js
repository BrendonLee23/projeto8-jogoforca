
import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";


export default function App() {

  const [erro, setErro] = useState()
  const [escolha, disableEscolha] = useState(true)

  return (
    <div>
      <div className="container">
      <Jogo escolha={escolha} disableEscolha={disableEscolha} />
      <Letras erro={erro} setErro={setErro} />
  </div>
    </div>
  );
} 
