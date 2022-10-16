import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const TinWhistle = () => {
    const questions = [
		{
			questionText: 'What type is this instrument?',
			answerOptions: [
				{ answerText: 'Brass', isCorrect: false },
				{ answerText: 'Percussion', isCorrect: false },
				{ answerText: 'Wood wind', isCorrect: true },
				{ answerText: 'Stringes', isCorrect: false },
			],
		},
		{
			questionText: 'Who mass-produced it?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Robert Clarke', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'How many holes are there?',
			answerOptions: [
				{ answerText: '6', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'What category of instrument is it in?',
			answerOptions: [
				{ answerText: 'Drum', isCorrect: false },
				{ answerText: 'Violin', isCorrect: false },
				{ answerText: 'French horn', isCorrect: false },
				{ answerText: 'Flutes', isCorrect: true },
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
				url="/tin.mp3"
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
			<h1  style={{ color: "black" }}>Vocab</h1>
			<p style={{ color: "black" }}>
				diatonic = diatonique, qui peut jouer les deux tons majeurs et leurs gammes relatives <br/>
				woodwind = A vent(instrument) <br/>
				affordable = abbordable <br/>
				hole = trou <br/>
				century = siècle <br/>
			</p>
			<br/>
			<img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Tinwhistles.jpg" />
        </>
    );
}

export default TinWhistle;
