import React from "react";
import moment from "moment";
import { GrClose } from "react-icons/gr";

const Responses = ({ answers, setAnswers }) => {
  const removeAnswer = (createdAt) => {
    setAnswers(answers.filter((answer) => answer.createdAt !== createdAt));
  };

  const sortedAnswers = answers.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  );

  return (
    <div className="responses">
      <h2 className="responses__title">Responses</h2>
      <div className="responses__content">
        {sortedAnswers.map(({ prompt, aiResponse, createdAt }, id) => {
          const time = moment(createdAt).format("MMMM Do YYYY, h:mm a");
          return (
            <div className="responses__card" key={id}>
              <div className="responses__prompt">
                <p>🗣 Prompt:</p>
                <p>{prompt}</p>
              </div>
              <div className="responses__response">
                <p>🔮 Response:</p>
                <p>{aiResponse}</p>
              </div>
              <time className="responses__time">{time}</time>
              <GrClose
                className="responses__delete"
                onClick={() => removeAnswer(createdAt)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Responses;
