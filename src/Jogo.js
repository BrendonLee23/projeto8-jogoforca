import { useState } from "react";
import img0 from "./images/forca0.png"
import img1 from "./images/forca1.png"
import img2 from "./images/forca2.png"
import img3 from "./images/forca3.png"
import img4 from "./images/forca4.png"
import img5 from "./images/forca5.png"
import img6 from "./images/forca6.png"
import {palavras} from "./palavras"

export default function Jogo(props) {

    function escolherPalavra() {
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        props.setPalavraEscolhida(palavras[indiceAleatorio]);
    }

    return (
        <div className="rised-area">
            <div className="rised-right">
                <img data-test="game-image" className="img-forca" src={img6} alt="forca-img"></img>
            </div>
            
            <div className="rised-left">
                {props.escolha ? <button data-test="choose-word" onClick={() => 
                {escolherPalavra()
                    props.disableEscolha(false)
                }}className="choice-word" alt="choice-word" ><p>Escolher Palavra</p></button> : 
                <button data-test="choose-word" disabled className="choice-word-disabled" alt="choice-word" ><p>Escolher Palavra</p></button> } 
                <ul className="word">
                    <p data-test="word" >{props.palavraEscolhida}</p>
                </ul>
            </div>
        </div>
    )
}
