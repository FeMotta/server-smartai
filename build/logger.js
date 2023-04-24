"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = {
    info: (message) => {
        console.log(`\x1b[32m[INFO]\x1b[0m ${message}`);
    },
    error: (message) => {
        console.log(`\x1b[31m[ERROR]\x1b[0m ${message}`);
    },
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map