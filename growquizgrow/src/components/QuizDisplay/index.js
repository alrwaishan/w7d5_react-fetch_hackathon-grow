import React, {useState, useEffect} from "react";

function QuizDisplay () {

const [quizInfo, setQuizInfo] = useState([]);
const [counter, setCounter] = useState(0);
//const [quizAnswers, setAnswersInfo] = useState([]);


useEffect(() => {
    async function getQuiz (){
        let response = await fetch (`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`);
        let data = await response.json();
        console.log(data.results[1]);
        setQuizInfo(data.results);
      }
      getQuiz();
}, []);

// function handleCorrectAnswer(){
    
// }

return (
    <div id="game-viewer">
        {quizInfo.map((item, index) => 
            (<div key={index}> 
                <h2>{item.question}</h2>
                <button className="correct-answer">{item.correct_answer}</button>
                <button className="incorrect-answer">{item.incorrect_answers[0]}</button>
                <button className="incorrect-answer">{item.incorrect_answers[1]}</button>
                <button className="incorrect-answer">{item.incorrect_answers[2]}</button>
            </div>)
        )};
    
    </div>
);

}

export default QuizDisplay;