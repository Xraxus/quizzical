import { useState } from "react";
import Start from "./Start/Start";
import Quiz from "./Quiz/Quiz";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  function startQuiz() {
    setIsStarted(true);
  }

  return (
    <>
      <main>{isStarted ? <Quiz /> : <Start handleClick={startQuiz} />}</main>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-top"
      >
        <path
          fill="#FFFAD1"
          d="M37.9,-64C52.1,-57.5,68.7,-53.4,78.7,-43.1C88.8,-32.8,92.3,-16.4,88.8,-2C85.4,12.4,74.9,24.8,63.8,33.3C52.7,41.7,41,46.2,30.2,49.7C19.5,53.3,9.8,55.9,0.1,55.7C-9.6,55.6,-19.2,52.7,-31.6,50.1C-44.1,47.6,-59.5,45.4,-66.6,37.1C-73.8,28.8,-72.7,14.4,-69.3,1.9C-65.9,-10.5,-60.3,-21.1,-56,-34.2C-51.6,-47.3,-48.5,-62.9,-39.4,-72.4C-30.3,-81.9,-15.1,-85.1,-1.6,-82.3C11.9,-79.5,23.7,-70.5,37.9,-64Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-bottom"
      >
        <path
          fill="#DEECF9"
          d="M37.1,-64.5C46.4,-58.9,51.1,-45.6,54.9,-33.5C58.7,-21.5,61.6,-10.7,64.6,1.7C67.6,14.2,70.6,28.3,67.7,42C64.9,55.7,56.1,68.9,43.9,74.3C31.6,79.8,15.8,77.5,2.9,72.4C-9.9,67.3,-19.8,59.4,-32.5,54.2C-45.3,49,-60.8,46.6,-67.7,38C-74.5,29.4,-72.7,14.7,-72.7,0C-72.7,-14.7,-74.6,-29.4,-67.8,-38.1C-61,-46.8,-45.5,-49.5,-32.8,-53C-20.1,-56.6,-10,-61.1,1.9,-64.4C13.9,-67.8,27.8,-70,37.1,-64.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
}

export default App;
