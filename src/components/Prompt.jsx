import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

const Prompt = ({ setAnswers }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion("text-ada-001", {
        prompt: `${userInput}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((res) => {
        const aiResponse = res.data.choices[0].text;
        setAnswers((prev) => [
          ...prev,
          { prompt: ` ${userInput}`, aiResponse },
        ]);
        setUserInput("");
      });
  };

  return (
    <div className="prompt">
      <h2 className="prompt__title">Enter Prompt</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="prompt__form">
        <textarea
          rows="10"
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
