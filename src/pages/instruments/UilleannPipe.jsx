import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const UileannPipe = () => {
    const questions = [
		{
			questionText: 'What was its first name?',
			answerOptions: [
				{ answerText: 'Henri IV', isCorrect: false },
				{ answerText: 'James Bond', isCorrect: false },
				{ answerText: 'Union Pipes', isCorrect: true },
				{ answerText: 'SpaceX', isCorrect: false },
			],
		},
		{
			questionText: 'How is it played?',
			answerOptions: [
				{ answerText: 'Dancing', isCorrect: false },
				{ answerText: 'Sitting', isCorrect: true },
				{ answerText: 'Smoking', isCorrect: false },
				{ answerText: 'Running', isCorrect: false },
			],
		},
		{
			questionText: 'When was it developed?',
			answerOptions: [
				{ answerText: '18th century', isCorrect: true },
				{ answerText: '11th century', isCorrect: false },
				{ answerText: '7th century', isCorrect: false },
				{ answerText: '1th century', isCorrect: false },
			],
		},
		{
			questionText: 'What is its Scottish name?',
			answerOptions: [
				{ answerText: 'Panflute', isCorrect: false },
				{ answerText: 'Clarinet', isCorrect: false },
				{ answerText: 'Tuba', isCorrect: false },
				{ answerText: 'Bagpipe', isCorrect: true },
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
				url="/uilleann.mp3"
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
				bagpipe = cornemuse <br/>
				seated = assis <br/>
				influenced = influencé <br/>
				narrate = conter(une histoire; une chanson) <br/>
				bellows = souflet <br/>
				sing = chanter <br/>
			</p>
			<br/>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/SeamusEnnis.jpg/280px-SeamusEnnis.jpg" />
        </>
    );
}

export default UileannPipe;
