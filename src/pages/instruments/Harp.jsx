import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const Harp = () => {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'Wind', isCorrect: false },
				{ answerText: 'Percussion', isCorrect: false },
				{ answerText: 'Stringed', isCorrect: true },
				{ answerText: 'Struck', isCorrect: false },
			],
		},
		{
			questionText: 'How are strings played?',
			answerOptions: [
				{ answerText: 'Struck', isCorrect: false },
				{ answerText: 'Plucked', isCorrect: true },
				{ answerText: 'Cut', isCorrect: false },
				{ answerText: 'Crushed', isCorrect: false },
			],
		},
		{
			questionText: 'How is it arranged?',
			answerOptions: [
				{ answerText: 'Angled', isCorrect: true },
				{ answerText: 'Straight', isCorrect: false },
				{ answerText: 'Upside down', isCorrect: false },
				{ answerText: 'Horizontal', isCorrect: false },
			],
		},
		{
			questionText: 'How is it played?',
			answerOptions: [
				{ answerText: 'By doing a salto', isCorrect: false },
				{ answerText: 'Dancing', isCorrect: false },
				{ answerText: 'Running', isCorrect: false },
				{ answerText: 'Many ways', isCorrect: true },
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
				url="/harp.mp3"
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
				sitting = assis <br/>
				plucked = pinc??es(note) <br/>
				shape = forme <br/>
				triangular = triangulaire <br/>
				rows = rang??es, lignes <br/>
				soudboard = ici, table d'harmonie<br/>
			</p>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Harp.png/200px-Harp.png"/>
        </>
    );
}

export default Harp;
