import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const Bouzouki = () => {
    const questions = [
		{
			questionText: 'What kind of music is it the main instrument of today?',
			answerOptions: [
				{ answerText: 'Metal', isCorrect: false },
				{ answerText: 'Rap US', isCorrect: false },
				{ answerText: 'Laïko', isCorrect: true },
				{ answerText: 'rebetiko', isCorrect: false },
			],
		},
		{
			questionText: 'In what country is it popular?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Greece', isCorrect: true },
				{ answerText: 'Spain', isCorrect: false },
				{ answerText: 'Ireland', isCorrect: false },
			],
		},
		{
			questionText: 'What material are its strings made of?',
			answerOptions: [
				{ answerText: 'Steel', isCorrect: true },
				{ answerText: 'Wood', isCorrect: false },
				{ answerText: 'Plastic', isCorrect: false },
				{ answerText: 'Water', isCorrect: false },
			],
		},
		{
			questionText: 'What are the two types of bouzouki?',
			answerOptions: [
				{ answerText: 'trachirdi and titricharda', isCorrect: false },
				{ answerText: 'tracharda and tatracharda', isCorrect: false },
				{ answerText: 'trolololo and tralalala', isCorrect: false },
				{ answerText: 'trichordo and tetrachordo', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return (
        <>
            <Link to="/instruments" style={{ color: "white"}} >% Back to Instruments</Link>
			<br />
			<h1  style={{ color: "black" }}>Audio</h1>
			<ReactPlayer
				url="/bouzouki.mp3"
				width="400px"
				height="50px"
				playing={false}
				controls={true}
			/>
			<br/>
			<h1 style={{ color: "black" }}>Quiz:</h1>
            <div className='quiz'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
		    </div>
			<br/>
			<h1  style={{ color: "black" }}>Vocab</h1>
			<p style={{ color: "black" }}>
				also spelled = également orthographié <br/>
				music instrument = instrument de musique <br/>
				refugees = réfugiés <br/>
				neck = ici, manche <br/>
				popular = populaire <br/>
			</p>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bouzouki_tetrachordo.jpg/250px-Bouzouki_tetrachordo.jpg" />
        </>
    );
}

export default Bouzouki;
