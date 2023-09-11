import { NextFunction, Request, Response } from "express";

import Quiz from "../models/quiz";
import Report from "../models/report";

import CustomError from "../helper/error";

interface ReturnResponse {
  status: "error" | "success";
  message: string;
  data: {} | [];
}

const startExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findById(quizId, {
      name: 1,
      questions_list: 1,
      is_published: 1,
    });
    if (!quiz) {
      const err = new CustomError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    if (!quiz.is_published) {
      const err = new CustomError("Quiz is not published");
      err.statusCode = 405;
      throw err;
    }

    let resp: ReturnResponse = {
      status: "success",
      message: "Quiz",
      data: quiz,
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

const submitExam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.body.quizId;
    const attempted_questions = req.body.attempted_questions;
    const quiz = await Quiz.findById(quizId, { answers: 1 });
    if (!quiz) {
      const err = new CustomError("Quiz not found");
      err.statusCode = 404;
      throw err;
    }
    const answers = quiz.answers;

    const userId = req.userId;
    console.log(userId);

    const allQuestions = Object.keys(answers);
    const total = allQuestions.length;

    let score = 0;

    for (let i = 0; i < total; i++) {
      let question_number = allQuestions[i];
      if (
        !!attempted_questions[question_number] &&
        answers[question_number] === attempted_questions[question_number]
      ) {
        score += 1;
      }
    }
    const result = new Report({ userId, quizId, score, total });
    const data = await result.save();
    let resp: ReturnResponse = {
      status: "success",
      message: "Quiz Submitted",
      data,
    };
    res.status(200).send(resp);
  } catch (error) {
    next(error);
  }
};

export { startExam, submitExam };
