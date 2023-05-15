
import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";


export default function App() {

  const [primeiraRender, setPrimeiraRender] = useState()
  const [erro, setErro] = useState()
  const [escolha, disableEscolha] = useState(true)
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);

  return (
    <div>
      <div className="container">
      <Jogo primeiraRender={primeiraRender} setPrimeiraRender={setPrimeiraRender} palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida} escolha={escolha} disableEscolha={disableEscolha} />
      <Letras erro={erro} setErro={setErro} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters}/>
  </div>
    </div>
  );
} 
