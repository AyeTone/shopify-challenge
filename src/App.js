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
      <Prompt setAnswers={setAnswers} />
      <Responses answers={answers} />
    </div>
  );
}

export default App;
