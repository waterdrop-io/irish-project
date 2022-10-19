import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const Fiddle = () => {
    const questions = [
		{
			questionText: 'A violin and a fiddle are ...',
			answerOptions: [
				{ answerText: 'of different colours', isCorrect: false },
				{ answerText: 'similars', isCorrect: false },
				{ answerText: 'totally different', isCorrect: true },
				{ answerText: 'different sounds', isCorrect: false },
			],
		},
		{
			questionText: 'The use of vibrato is ...',
			answerOptions: [
				{ answerText: 'forbidden', isCorrect: false },
				{ answerText: 'less common', isCorrect: true },
				{ answerText: 'mandatory', isCorrect: false },
				{ answerText: 'not recommended', isCorrect: false },
			],
		},
		{
			questionText: 'A fiddle player is not a ...',
			answerOptions: [
				{ answerText: 'Fiddler', isCorrect: true },
				{ answerText: 'Singer', isCorrect: false },
				{ answerText: 'Dancer', isCorrect: false },
				{ answerText: 'Student', isCorrect: false },
			],
		},
		{
			questionText: 'The fiddle is mounted ... on a violin',
			answerOptions: [
				{ answerText: 'tighter than', isCorrect: false },
				{ answerText: 'higher', isCorrect: false },
				{ answerText: 'easily than', isCorrect: false },
				{ answerText: 'differently', isCorrect: true },
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
				url="/fiddle.mp3"
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
				fiddle = violon irlandais <br/>
				no way comparable = ne sont pas comparable <br/>
				bow = ici, l'archet <br/>
				fast tunes = airs rapides <br/>
				mounted = monté <br/>
				hands = mains<br/>
			</p>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Morris_fiddler_-_Festivals_of_Winds%2C_2012.jpg/187px-Morris_fiddler_-_Festivals_of_Winds%2C_2012.jpg" />
        </>
    );
}

export default Fiddle;
