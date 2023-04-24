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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTextCompletion = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("../logger");
dotenv_1.default.config();
const openaiApiKey = process.env.OPENAI_API_KEY;
const generateTextCompletion = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    try {
        const response = yield axios_1.default.post(apiUrl, {
            prompt: prompt,
            max_tokens: 200,
            n: 1,
            stop: null,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`,
            },
        });
        const textCompletion = response.data.choices[0].text.trim();
        logger_1.logger.info(textCompletion);
        return textCompletion;
    }
    catch (error) {
        logger_1.logger.error(error);
        throw new Error('Generating text completion');
    }
});
exports.generateTextCompletion = generateTextCompletion;
