"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
const port = Number(process.env.PORT) || 3001;
exports.port = port;
const host = process.env.HOST || 'localhost';
exports.host = host;
const corsOrigin = process.env.CORS_ORIGIN || 'https://react-smartai.ue.r.appspot.com';
app.use((0, cors_1.default)({ origin: corsOrigin }));
app.use(express_1.default.json());
