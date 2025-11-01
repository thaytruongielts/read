
import React, { useState, useMemo } from 'react';
import { IELTS_DATA } from './constants';
import { Passage } from './types';
import TestComponent from './components/TestComponent';
import ResultsComponent from './components/ResultsComponent';

function App() {
  const [testData] = useState<Passage[]>(IELTS_DATA);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [isTestFinished, setIsTestFinished] = useState(false);

  const score = useMemo(() => {
    if (!isTestFinished) return 0;
    
    let correctCount = 0;
    testData.forEach(passage => {
      passage.questions.forEach(question => {
        const userAnswer = userAnswers[`${passage.id}-${question.id}`]?.trim().toLowerCase() || '';
        const correctAnswer = passage.answers.find(ans => ans.questionId === question.id)?.answer.trim().toLowerCase();
        if (userAnswer === correctAnswer) {
          correctCount++;
        }
      });
    });

    return correctCount * 0.25;
  }, [isTestFinished, userAnswers, testData]);

  const handleAnswerChange = (passageId: number, questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [`${passageId}-${questionId}`]: answer,
    }));
  };

  const handleNextPassage = () => {
    if (currentPassageIndex < testData.length - 1) {
      setCurrentPassageIndex(prev => prev + 1);
    }
  };

  const handlePrevPassage = () => {
    if (currentPassageIndex > 0) {
      setCurrentPassageIndex(prev => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    setIsTestFinished(true);
    window.scrollTo(0, 0);
  };

  const handleRestartTest = () => {
    setCurrentPassageIndex(0);
    setUserAnswers({});
    setIsTestFinished(false);
    window.scrollTo(0, 0);
  };

  const totalQuestions = testData.reduce((sum, p) => sum + p.questions.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-700">IELTS Reading Practice</h1>
          <div className="text-sm font-semibold text-slate-600">Band 7 Target</div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isTestFinished ? (
          <ResultsComponent 
            testData={testData}
            userAnswers={userAnswers}
            score={score}
            onRestart={handleRestartTest}
            totalQuestions={totalQuestions}
          />
        ) : (
          <TestComponent
            passage={testData[currentPassageIndex]}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onNext={handleNextPassage}
            onPrev={handlePrevPassage}
            onSubmit={handleSubmitTest}
            currentPassageIndex={currentPassageIndex}
            totalPassages={testData.length}
            totalQuestionsAnswered={Object.keys(userAnswers).length}
            totalQuestions={totalQuestions}
          />
        )}
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Created for IELTS preparation. Good luck!</p>
      </footer>
    </div>
  );
}

export default App;
