/**Question Types */
export interface MCQ {
    id: string;
    question: string;
}

export interface CodingQ {
    id: string;
    question: string;
}

/**Answer Types */
export interface Option {
    textId: string;
    text: string;
}

export interface mcAnswer {
    id: string;
    options: Option[];
    correctId: string;
}

export type CodingAnswer =
  | { type: "fib"; id: string; correctAnswers: string| string[] }
  | { type: "ordering"; id: string; correctOrder: string | string[]; options: string[] }
  | { type: "mcq"; id: string; options: Option[]; correctId: string };

/**Feedback Types */
export interface mcFeedback {
    id: string;
    options: Option[];
}

export type codingFeedback = 
    | {type: "fib"; id: string; feedback: string}
    | {type: "ordering"; id: string; feedback: string}
    |  {type: "mcq"; id: string; feedback: string};



/**Local Storage */
interface QuestionResult {
    studentAnswer: string | string[];
    isCorrect: boolean;
    hasSubmit: boolean;
}

export interface TopicData {
    [questionId: string]: QuestionResult;
}