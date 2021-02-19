import React, {useState, useEffect} from "react";
import Button from "../Button";

function QuizDisplay () {

const [quizInfo, setQuizInfo] = useState([]);
const [counter, setCounter] = useState(0);
const [wrongCounter, setWrongCounter] = useState(1);
const [quizLevel, setQuizLevel] = useState(`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`)

useEffect(() => {
    async function getQuiz (){
        let response = await fetch (`${quizLevel}`);
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
    setWrongCounter(wrongCounter+1);
    console.log (wrongCounter);
    // alert("Wrong Answer");
}

function refreshPage(){
    window.location.reload();
} 


return (
    <div id="game-viewer">
        <h1>Points: {counter}</h1>
        <h1>Errors: {wrongCounter-1}</h1>
        <h1>Total: {counter+wrongCounter-1}</h1>
        {quizInfo.map((item, index) => 
            (<div key={index}> 
                <h2>{item.question}</h2>
                <Button arrayIncorrect={item.incorrect_answers} itemCorrect={item.correct_answer} handleCorrectClick={handleCorrectAnswer} handleIncorrectClick={handleIncorrectAnswer}></Button>
            </div>)
        )}

        <button type="submit" onClick={refreshPage}>Refresh Button</button>

    </div>
);
}

export default QuizDisplay;