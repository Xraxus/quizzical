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
        className="blob blob-top-right"
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
        className="blob blob-bottom-left"
      >
        <path
          fill="#DEECF9"
          d="M37.1,-64.5C46.4,-58.9,51.1,-45.6,54.9,-33.5C58.7,-21.5,61.6,-10.7,64.6,1.7C67.6,14.2,70.6,28.3,67.7,42C64.9,55.7,56.1,68.9,43.9,74.3C31.6,79.8,15.8,77.5,2.9,72.4C-9.9,67.3,-19.8,59.4,-32.5,54.2C-45.3,49,-60.8,46.6,-67.7,38C-74.5,29.4,-72.7,14.7,-72.7,0C-72.7,-14.7,-74.6,-29.4,-67.8,-38.1C-61,-46.8,-45.5,-49.5,-32.8,-53C-20.1,-56.6,-10,-61.1,1.9,-64.4C13.9,-67.8,27.8,-70,37.1,-64.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-top-left"
      >
        <path
          fill="#FFEAF3"
          d="M32.8,-43C44.1,-36.9,55.9,-29.5,52.6,-21.4C49.3,-13.3,30.9,-4.7,23.7,4.7C16.6,14.1,20.7,24.2,18.7,33.7C16.6,43.3,8.3,52.2,-3.3,56.8C-15,61.4,-29.9,61.6,-35.4,53.2C-40.8,44.7,-36.7,27.7,-32.4,16.3C-28.1,5,-23.5,-0.6,-25.8,-13C-28.2,-25.5,-37.4,-44.8,-34.2,-53.6C-31.1,-62.3,-15.5,-60.5,-2.4,-57.3C10.7,-54,21.5,-49.2,32.8,-43Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="blob blob-bottom-right"
      >
        <path
          fill="#F3ECFF"
          d="M9.5,-10.1C19,-6.3,37.7,-12.3,47.9,-9C58.1,-5.6,59.8,7.2,55.6,17.5C51.5,27.9,41.6,35.8,31.4,48.1C21.2,60.3,10.6,77,-4.1,82.7C-18.8,88.3,-37.7,83.1,-45.2,69.9C-52.7,56.7,-48.8,35.7,-46.1,20.5C-43.4,5.4,-41.8,-3.8,-42.3,-17.2C-42.7,-30.6,-45.2,-48.2,-38.5,-52.9C-31.8,-57.7,-15.9,-49.6,-7.9,-38.7C0.1,-27.8,0.1,-14,9.5,-10.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
}

export default App;
