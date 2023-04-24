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
router.post('/generate-question', validations_1.validateGenerateQuestionRequest, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (isProcessing) {
        res.status(400).json({ error: 'Request já esta sendo processado' });
        return;
    }
    isProcessing = true;
    const topic = req.body.topic;
    const level = req.body.level;
    const prompt = `Você pode gerar uma questão que testa o conhecimento do estudante sobre ${topic}? A questão deve ter um nivel de dificuldade ${level} e deve forçar o estudante a demonstrar o conhecimento que ele tem sobre o assunto. Por favor, crie uma questão clara e objetiva e que não seja de multipla escolha.`;
    try {
        const generatedQuestion = yield (0, openai_1.generateTextCompletion)(prompt);
        res.status(200).json({ question: generatedQuestion });
    }
    catch (error) {
        logger_1.logger.error(error);
        res.status(500).json({ error: 'Erro ao gerar questão' });
    }
    finally {
        isProcessing = false;
    }
}));
exports.default = router;
//# sourceMappingURL=generate-question.js.map