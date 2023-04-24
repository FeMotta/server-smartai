"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCheckAnswerRequest = exports.validateGenerateQuestionRequest = void 0;
const validateGenerateQuestionRequest = (req, res, next) => {
    const { topic, level } = req.body;
    if (!topic) {
        res.status(400).json({ error: 'Tópico não foi encontrado' });
        return;
    }
    if (!level) {
        res.status(400).json({ error: 'Level não foi encontrado' });
        return;
    }
    if (typeof topic !== 'string' || typeof level !== 'string') {
        res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
        return;
    }
    next();
};
exports.validateGenerateQuestionRequest = validateGenerateQuestionRequest;
const validateCheckAnswerRequest = (req, res, next) => {
    const { question, userAnswer } = req.body;
    if (!question) {
        res.status(400).json({ error: 'Questão não foi encontrada' });
        return;
    }
    if (!userAnswer) {
        res.status(400).json({ error: 'Resposta do usuario não foi encontrada' });
        return;
    }
    if (typeof question !== 'string' || typeof userAnswer !== 'string') {
        res.status(400).json({ error: 'O tipo do valor no input não corresponde' });
        return;
    }
    next();
};
exports.validateCheckAnswerRequest = validateCheckAnswerRequest;
//# sourceMappingURL=validations.js.map