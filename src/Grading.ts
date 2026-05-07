export const gradeMCQ = (topicAnswers, questionId: string, studentAnswer: string) => {
    const answerKey = topicAnswers.find(q => q.id === questionId);

    if (!answerKey) return false;

    return answerKey.correctId === studentAnswer;
};


export const gradeFIB = (topicAnswers, questionId: string, studentAnswer: string[]) => {
    const answerKey = topicAnswers.find(q => q.id === questionId);

    if (!answerKey || !Array.isArray(answerKey.correctAnswers)) return false;

    return (
        JSON.stringify(
            studentAnswer.map(a => a.trim())
        ) ===
        JSON.stringify(
            answerKey.correctAnswers.map(a => a.trim())
        )
    );
};

export const gradeOrdering = (topicAnswers, questionId: string, studentAnswer: string) => {
    const answerKey = topicAnswers.find(q => q.id === questionId);

    if (!answerKey || !answerKey.correctOrder) return false;

    const student = studentAnswer.replace(/\s/g, "");

    return answerKey.correctOrder.some((correct) => {
        return correct.replace(/\s/g, "") === student;
    });
};

export const saveAnswer = (
    module: string,
    topic: string,
    questionId: string,
    studentAnswer: string | string[],
    isCorrect: boolean
) => {
    const data = JSON.parse(localStorage.getItem("quizResults") || "{}");

    if (!data[module]) data[module] = {};
    if (!data[module][topic]) data[module][topic] = {};

    data[module][topic][questionId] = {
        studentAnswer,
        isCorrect
    };

    localStorage.setItem("quizResults", JSON.stringify(data));
};