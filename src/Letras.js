import { useState } from "react"

function Letra(props) {

    const [letter, setLetterSelected] = useState([]);

    function letterClicked(letra) {
        const selecionado = letter.includes(letra);
        if (!selecionado && letter.length < 7) {
            const novo = [...letter];
            novo.push(letra);
            setLetterSelected(novo);
            props.onLetterClicked();
        }
    }

    return (
        <button
            onClick={() => letterClicked(props.alfabeto)}
            className={`button-letter ${letter.includes(props.alfabeto) && "disabled"}`}
        >
            <p>{props.alfabeto}</p>
        </button>
    );
}

export default function Letras(props) {
    const [numCliques, setNumCliques] = useState(0);
    const [rodadasRestantes, setRodadasRestantes] = useState(5);

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    function contagemClicks() {
        setNumCliques(numCliques + 1);
        setRodadasRestantes(5 - numCliques - 1);
        if (numCliques >= 5) {
            alert("Você perdeu");
            window.location.reload(); // recarrega a página
        } else {
            alertRodadasRestantes();
        }
    }

    function alertRodadasRestantes() {
        alert(`Rodadas restantes: ${rodadasRestantes}`);
    }

    return (
        <div className="lower-area">
            <div className="kayboard">
                {alfabeto.map((letra) => (
                    <Letra
                        alfabeto={letra}
                        key={letra}
                        onLetterClicked={contagemClicks}
                    />
                ))}
            </div>
        </div>
    );
}
