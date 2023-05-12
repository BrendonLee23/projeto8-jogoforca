import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./Palavras";

export default function App() {

  function escolherPalavra(){
    alert("oi")
  }

  return (
    <div>
      <div className="container">
      <Jogo escolherPalavra={escolherPalavra}/>
      <Letras />
  </div>
    </div>
  );
} 
