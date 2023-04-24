"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_ts_1 = require("./config.ts");
const generateQuestion_ts_1 = __importDefault(require("./routes/generateQuestion.ts"));
const checkAnswer_ts_1 = __importDefault(require("./routes/checkAnswer.ts"));
const logger_ts_1 = require("./logger.ts");
config_ts_1.app.use('/api', generateQuestion_ts_1.default);
config_ts_1.app.use('/api', checkAnswer_ts_1.default);
config_ts_1.app.listen(config_ts_1.port, config_ts_1.host, () => {
    logger_ts_1.logger.info(`Server running at http://${config_ts_1.host}:${config_ts_1.port}`);
});
