"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openai_1 = require("../api/openai");
const validations_1 = require("../middlewares/validations");
const logger_1 = require("../logger");
const router = (0, express_1.Router)();
let isProcessing = false;
router.post('/check-answer', validations_1.validateCheckAnswerRequest, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (isProcessing) {
        res.status(400).json({ error: 'Request já esta sendo processado' });
        return;
    }
    isProcessing = true;
    const question = req.body.question;
    const userAnswer = req.body.userAnswer;
    const apikey = req.body.apikey;
    const prompt = createAnswerPrompt(question, userAnswer);
    try {
        const answerCheck = yield (0, openai_1.generateTextCompletion)(prompt, apikey);
        res.status(200).json({ answerCheck });
    }
    catch (error) {
        logger_1.logger.error(error);
        res.status(500).json({ error: 'Error checking answer' });
    }
    finally {
        isProcessing = false;
    }
}));
function createAnswerPrompt(question, userAnswer) {
    return `Avalie a seguinte questão e resposta: Questão: "${question}". Resposta do usuário: "${userAnswer}". Está correto? Se não estiver correto, por favor, forneça uma explicação detalhada do erro e sugira uma resposta aprimorada ou correção para a questão ou resposta fornecida.`;
}
exports.default = router;
