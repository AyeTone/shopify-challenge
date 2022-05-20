import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

const Prompt = ({ setAnswers }) => {
  const [userInput, setUserInput] = useState("");
  const [aiChosen, setAiChosen] = useState("ada");

  const switchAi = (e) => {
    setAiChosen(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      openai
        .createCompletion(`text-${aiChosen}-001`, {
          prompt: `${userInput}`,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((res) => {
          const aiResponse = res.data.choices[0].text;
          const createdAt = new Date();
          setAnswers((prev) => [
            { prompt: ` ${userInput}`, aiResponse, createdAt },
            ...prev,
          ]);
          setUserInput("");
        });
    }
  };

  return (
    <div className="prompt">
      <div className="prompt__header">
        <h2 className="prompt__title">Ask a Question.</h2>
        <div className="prompt__select">
          <label className="prompt__label" htmlFor="ai">
            Choose an Ai to talk to:
          </label>
          <select
            name="ai"
            id="ai"
            defaultValue="ada"
            onChange={(e) => switchAi(e)}
            className="prompt__dropdown"
          >
            <option value="ada">Ada</option>
            <option value="davinci">Davinci</option>
            <option value="curie">Curie</option>
            <option value="babbage">Babbage</option>
          </select>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="prompt__form">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="prompt__textarea"
        ></textarea>
        <br></br>
        <button className="prompt__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Prompt;
