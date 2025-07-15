import { useState } from "react";
import { data } from "./data";
import "./QuizApp.css";

export default function QuizApp() {
  let [index, setIndex] = useState(0);
  let [finish, setFinish] = useState(false);
  let [score, setScore] = useState(0);
  let [option, setOption] = useState("");
  const correctOption = [
    "Option1",
    "Option2",
    "Option1",
    "Option3",
    "Option3",
    "Option1",
    "Option1",
    "Option2",
    "Option1",
    "Option2"
  ];

  const handleIndex = () => {
    if (correctOption[index] === option) {
        setScore(score + 1);
      }
    if (index < data.length - 1) {
      
      setIndex(++index);
      setOption("");
    } else {
      setFinish(true);
    }
  };

  const handleSelect = (opt) => {
    setOption(opt);
  };

  if (finish) {
    return (
      <div className="scorePage">
        <h1>Quiz Finished</h1>
        <h3>
          Your score is {score} of {data.length}
        </h3>
      </div>
    );
  }
  return (
    <div className="quiz">
      <h1>QuizApp</h1>
      <h3>
        Question {index + 1} :{data[index].Question}
      </h3>
      <ul>
        <li
          className={option === "Option1" ? "selected" : ""}
          onClick={() => handleSelect("Option1")}
        >
          {data[index].Option1}
        </li>
        <li
          className={option === "Option2" ? "selected" : ""}
          onClick={() => handleSelect("Option2")}
        >
          {data[index].Option2}
        </li>
        <li
          className={option === "Option3" ? "selected" : ""}
          onClick={() => handleSelect("Option3")}
        >
          {data[index].Option3}
        </li>
        <li
          className={option === "Option4" ? "selected" : ""}
          onClick={() => handleSelect("Option4")}
        >
          {data[index].Option4}
        </li>
      </ul>

      <button onClick={handleIndex} disabled ={!option}>Next</button>
      <h6>
        Question {index + 1} out of {data.length}
      </h6>
    </div>
  );
}
