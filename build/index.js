"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const generate_question_1 = __importDefault(require("./routes/generate-question"));
const check_answer_1 = __importDefault(require("./routes/check-answer"));
const logger_1 = require("./logger");
config_1.app.use('/api', generate_question_1.default);
config_1.app.use('/api', check_answer_1.default);
config_1.app.get('/', (req, res) => {
    return res.json({
        message: 'SmartAI API',
    });
});
config_1.app.listen(config_1.port, config_1.host, () => {
    logger_1.logger.info(`Server running at http://${config_1.host}:${config_1.port}`);
});
