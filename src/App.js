import { useState, useEffect } from "react";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import Responses from "./components/Responses";

function App() {
  const savedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
  const [answers, setAnswers] = useState(savedAnswers);

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Prompt answers={answers} setAnswers={setAnswers} />
        <Responses answers={answers} setAnswers={setAnswers} />
      </div>
    </div>
  );
}

export default App;
