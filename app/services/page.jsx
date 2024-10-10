"use client";
import { Accordion } from "flowbite-react";
import React, { useState } from 'react';
import './index.css';



const questions = [
  {
    questionText: 'Worrying too much about different things',
    answerOptions: [
      { answerText: 'NOT AT ALL', isCorrect: false },
      { answerText: 'SEVERAL DAYS', isCorrect: false },
      { answerText: 'MORE THAN HALF THE DAYS', isCorrect: true },
      { answerText: 'NEARLY EVERY DAY', isCorrect: false },
    ],
  },
  {
    questionText: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    answerOptions: [
      { answerText: 'NEVER', isCorrect: false },
      { answerText: 'RARELY', isCorrect: true },
      { answerText: 'SOMETIMES', isCorrect: false },
      { answerText: 'OFTEN', isCorrect: false },
    ],
  },
  {
    questionText: 'Feeling down, depressed, or hopeless',
    answerOptions: [
      { answerText: 'NOT AT ALL', isCorrect: false },
      { answerText: 'SEVERAL DAYS', isCorrect: false },
      { answerText: 'MORE THAN HALF THE DAYS', isCorrect: true },
      { answerText: 'NEARLY EVERY DAY', isCorrect: false },
    ],
  },
  {
    questionText: 'Feeling afraid, as if something awful might happen',
    answerOptions: [
      { answerText: 'NOT AT ALL', isCorrect: false },
      { answerText: 'SEVERAL DAYS', isCorrect: false },
      { answerText: 'MORE THAN HALF THE DAYS', isCorrect: true },
      { answerText: 'NEARLY EVERY DAY', isCorrect: false },
    ],
  },
];

const Services = () => {

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

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Sample Quiz
          </h2>
        </div>
      </div>

      {/* Services */}
      


 <section>
 

	

	

	
	
		<div className='apps'>
			{showScore ? (
				<div className='score-section'>
					Your response has been submitted.
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
	

 </section>

    
      
    </>
  );
};

export default Services;