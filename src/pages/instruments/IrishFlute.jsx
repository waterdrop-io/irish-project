import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const IrishFlute = () => {
    const questions = [
		{
			questionText: 'What wood are flutes made of?',
			answerOptions: [
				{ answerText: 'Oak', isCorrect: false },
				{ answerText: 'Birch', isCorrect: false },
				{ answerText: 'Cocuswood', isCorrect: true },
				{ answerText: 'Fir', isCorrect: false },
			],
		},
		{
			questionText: 'Which virtuoso started the fashion?',
			answerOptions: [
				{ answerText: 'Mozart', isCorrect: false },
				{ answerText: 'Charles Nicholson', isCorrect: true },
				{ answerText: 'Bethoven', isCorrect: false },
				{ answerText: 'Eminem', isCorrect: false },
			],
		},
		{
			questionText: 'What is special about this flute?',
			answerOptions: [
				{ answerText: 'It has larger holes', isCorrect: true },
				{ answerText: 'She can dance', isCorrect: false },
				{ answerText: 'It is French', isCorrect: false },
				{ answerText: 'She drinks whisky', isCorrect: false },
			],
		},
		{
			questionText: 'What note is it tuned to?',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Squeezie', isCorrect: false },
				{ answerText: 'F', isCorrect: false },
				{ answerText: 'D', isCorrect: true },
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
				url="/irish_flute.mp3"
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
				wooden flute = flûte traversière <br/>
				D = Ré(note) <br/>
				virtuoso = virtuose <br/>
				fashion = mode <br/>
				slightly husky = un peu rauque <br/>
				cocuswood = ébène de Jamaïque<br/>
			</p>
			<br />
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Irish_Flute_keyless.jpg/40px-Irish_Flute_keyless.jpg" />
        </>
    );
}

export default IrishFlute;
