import React, {useState, useEffect} from "react";
import Button from "../Button";

function QuizDisplay () {

const [quizInfo, setQuizInfo] = useState([]);
const [counter, setCounter] = useState(0);


useEffect(() => {
    async function getQuiz (){
        let response = await fetch (`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`);
        let data = await response.json();
        console.log(data.results[1]);
        setQuizInfo(data.results);
      }
      getQuiz();
}, []);

function handleCorrectAnswer(){
    setCounter(counter+1);
}

function handleIncorrectAnswer(){
    alert("Wrong Answer");
}

return (
    <div id="game-viewer">
        <h1>Points: {counter}</h1>
        {quizInfo.map((item, index) => 
            (<div key={index}> 
                <h2>{item.question}</h2>
                <Button arrayIncorrect={item.incorrect_answers} itemCorrect={item.correct_answer} handleCorrectClick={handleCorrectAnswer} handleIncorrectClick={handleIncorrectAnswer}></Button>
            </div>)
        )}
    
    </div>
);
}

export default QuizDisplay;