import React from "react";

const Responses = ({ answers }) => {
  return (
    <div className="responses">
      <h2 className="responses__title">Responses</h2>
      {answers.map(({ prompt, aiResponse }, id) => {
        return (
          <div className="responses__card" key={id}>
            <div className="responses__prompt">
              <p>Prompt:</p>
              <p>{prompt}</p>
            </div>
            <div className="responses__response">
              <p>Response:</p>
              <p>{aiResponse}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Responses;
