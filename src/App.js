/* import img1 from "./images/forca0.png" */
import img0 from "./images/forca0.png"

export default function App() {
  return (
    <div>
      <div class="container">
    <div class="rised-area">
      <div class="rised-right">
        <img class="img-forca" src={img0} alt="forca-img"></img>
      </div>
      <div class="rised-left">
        <button class="choice-word" alt="choice-word" ><p>Escolher Palavra</p></button>
        <ul class="word">
          <li><span>P</span></li>
          <li><span>A</span></li>
          <li><span>L</span></li>
          <li><span>A</span></li>
          <li><span>V</span></li>
          <li><span>R</span></li>
          <li><span>A</span></li>
        </ul>
      </div>
    </div>
    <div class="lower-area">
      <div class="kayboard">
        <div class="top-letters">
          <button class="button-letter">
            <p>A</p>
          </button>
          <button class="button-letter">
            <p>B</p>
          </button>
          <button class="button-letter">
            <p>C</p>
          </button>
          <button class="button-letter">
            <p>D</p>
          </button>
          <button class="button-letter">
            <p>E</p>
          </button>
          <button class="button-letter">
            <p>F</p>
          </button>
          <button class="button-letter">
            <p>G</p>
          </button>
          <button class="button-letter">
            <p>H</p>
          </button>
          <button class="button-letter">
            <p>I</p>
          </button>
          <button class="button-letter">
            <p>J</p>
          </button>
          <button class="button-letter">
            <p>K</p>
          </button>
          <button class="button-letter">
            <p>L</p>
          </button>
          <button class="button-letter">
            <p>M</p>
          </button>
        </div>
        <div class="bot-letters">
          <button class="button-letter">
            <p>N</p>
          </button>
          <button class="button-letter">
            <p>O</p>
          </button>
          <button class="button-letter">
            <p>P</p>
          </button>
          <button class="button-letter">
            <p>Q</p>
          </button>
          <button class="button-letter">
            <p>R</p>
          </button>
          <button class="button-letter">
            <p>S</p>
          </button>
          <button class="button-letter">
            <p>T</p>
          </button>
          <button class="button-letter">
            <p>U</p>
          </button>
          <button class="button-letter">
            <p>V</p>
          </button>
          <button class="button-letter">
            <p>W</p>
          </button>
          <button class="button-letter">
            <p>X</p>
          </button>
          <button class="button-letter">
            <p>Y</p>
          </button>
          <button class="button-letter">
            <p>Z</p>
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
