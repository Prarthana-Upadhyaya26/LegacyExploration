'use client';

import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const genAI = new GoogleGenerativeAI('AIzaSyCwE5F3pc4-DS8SuoxM3XI13ukLQj2wgI0');

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const MCQPracticeApp: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(5 * 60);
  const [quizEnded, setQuizEnded] = useState<boolean>(false);
  const [finalTime, setFinalTime] = useState<number | null>(null);
  const [earnedCoins, setEarnedCoins] = useState<number>(0);

  useEffect(() => {
    generateQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !quizEnded) {
      const timerId = setTimeout(() => setTimeLeft(prevTime => prevTime - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !quizEnded) {
      endQuiz();
    }
  }, [timeLeft, quizEnded]);

  const endQuiz = (): void => {
    setQuizEnded(true);
    if (finalTime === null) {
      setFinalTime(5 * 60 - timeLeft);
    }
    setEarnedCoins(calculateCoins());
  };

  const restartQuiz = (): void => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(5 * 60);
    setQuizEnded(false);
    setFinalTime(null);
    setLoading(true);
    generateQuestions();
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateCoins = (): number => {
    const totalQuestions = questions.length;
    if (totalQuestions === 0) {
      console.warn("No questions available. Skipping coin calculation.");
      return 0;
    }

    const timefixed = Math.max(0, timeLeft);
    const timeTaken = 5 * 60 - timefixed;
    const scoreRatio = score / totalQuestions;
    const timePenalty = Math.min(1, Math.max(0, timeTaken / (5 * 60)));

    const earnedCoins = Math.max(0, (scoreRatio * 100) * (1 - timePenalty));
    return Math.round(earnedCoins);
  };

  const generateQuestions = async (): Promise<void> => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `
        Generate 10 multiple-choice questions based on Indian Culture and Heritage. Questions similar to questions that appear in the reality show KBC "Kon Banega Crorepati" to keep it fun. 
        The questions should cover various topics within the text. 
        Please format the response strictly as a JSON array, where each element is an object with the following structure:
        [
          {
            "question": "The text that forms the question",
            "options": [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4"
            ],
            "correctAnswer": 0 // index of the correct answer (0-based)
          },
          // Repeat for 10 questions
        ]
        Make sure the JSON is valid and doesn't include extra information or formatting.
      `;
      
      const result = await model.generateContent(prompt);
  
      const response = await result.response;
      const Text = response.text();
      const responseText = Text.replace(/```json\n|\n```/g, '').trim()
      if (responseText) {
        let questions: Question[];
        try {
          questions = JSON.parse(responseText);
        } catch (parseError) {
          console.error("Parsing error:", parseError);
          throw new Error("The AI response format was invalid. Please try again.");
        }
  
        if (Array.isArray(questions) && questions.every(q => q.question && q.options && typeof q.correctAnswer === "number")) {
          setQuestions(questions);
        } else {
          throw new Error("The AI response did not contain valid quiz data.");
        }
      } else {
        throw new Error("API response does not contain 'text' field.");
      }
    } catch (error) {
      console.error('Error generating questions:', error);
      setQuestions([]);
      alert("Failed to generate questions. Please try again.");
    }
    setLoading(false);
  };

  const handleAnswerSelection = (index: string): void => {
    setSelectedAnswer(parseInt(index));
  };

  const handleNextQuestion = (): void => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(prev => prev + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen" style={{ backgroundImage: "url('/Quiz1.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center'}}>Loading questions...</div>;
  }

  if (quizEnded || currentQuestionIndex >= questions.length) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100" style={{ backgroundImage: "url('/Quiz1.jpeg')" , backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Quiz Ended</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-4">Your final score: {score} / {questions.length}</p>
            <p>Time taken: {5 * 60 - timeLeft} seconds</p>
            <p>Coins Earned: {earnedCoins}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('/Quiz1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Culture Quiz</CardTitle>
          <div className="flex justify-between items-center">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span className="font-semibold">Time left: {formatTime(timeLeft)}</span>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">{currentQuestion.question}</h2>
          <RadioGroup value={selectedAnswer?.toString()} onValueChange={handleAnswerSelection}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
          <Button variant="outline" onClick={endQuiz}>End Quiz</Button>
          <Button variant="outline" onClick={restartQuiz}>Restart Quiz</Button>
        </CardFooter>
        <Progress value={(currentQuestionIndex / questions.length) * 100} className="mt-4" />
      </Card>
    </div>
  );
};

export default MCQPracticeApp;
