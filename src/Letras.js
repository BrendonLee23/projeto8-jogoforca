import { useState } from "react"

function Letra(props) {

    const [isSelected, setIsSelected] = useState(false);

    function letterClicked(letra) {
        if (!isSelected && props.selectedLetters.length < 7) {
            setIsSelected(true);
            props.onLetterClicked(letra);
        }
    }

    return (
        <button data-test="letter"
            onClick={() => {
                setTimeout(() => {
                    document.querySelectorAll('.disabled').forEach((elemento) => {
                        elemento.setAttribute('disabled', 'disabled');
                    })
                }, 200)
                letterClicked(props.alfabeto)
            }} className={`button-letter ${isSelected && "disabled"}`}
        >
            <p>{props.alfabeto}</p>
        </button>
    );
}

export default function Letras(props) {
    const [numCliques, setNumCliques] = useState(0);
    /* const [rodadasRestantes, setRodadasRestantes] = useState(5); */
    

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    function contagemClicks(letra) {
        setNumCliques(numCliques + 1);
        /* setRodadasRestantes(5 - numCliques - 1); */
        if (numCliques >= 6) {
            alert("Você perdeu");
            window.location.reload(); // recarrega a página
        } else {
            /* alertRodadasRestantes(); */
        }
        const newSelectedLetters = [...props.selectedLetters];
        newSelectedLetters.push(letra);
        props.setSelectedLetters(newSelectedLetters);
        console.log(newSelectedLetters);
    }

/*     function alertRodadasRestantes() {
        alert(`Rodadas restantes: ${rodadasRestantes}`);
    } */

    return (
        <div className="lower-area">
            <div className="kayboard">
                {alfabeto.map((letra) => (
                    <Letra
                        alfabeto={letra}
                        key={letra}
                        selectedLetters={props.selectedLetters}
                        onLetterClicked={contagemClicks}
                    />
                ))}
            </div>
        </div>
    );
}
