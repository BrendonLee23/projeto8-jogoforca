import img0 from "./images/forca0.png"
import img1 from "./images/forca1.png"
import img2 from "./images/forca2.png"
import img3 from "./images/forca3.png"
import img4 from "./images/forca4.png"
import img5 from "./images/forca5.png"
import img6 from "./images/forca6.png"
import randomWord from "./RandomWord"

export default function Jogo(props) {
    return (
        <div className="rised-area">
            <div className="rised-right">
                <img className="img-forca" src={img6} alt="forca-img"></img>
            </div>
            <div className="rised-left">
                <button onClick={props.escolherPalavra} className="choice-word" alt="choice-word" ><p>Escolher Palavra</p></button>
                <ul className="word">
                    <p>Palavra</p>
                </ul>
            </div>
        </div>
    )
}
