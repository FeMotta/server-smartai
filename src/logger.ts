const logger = {
  info: (message: string): void => {
    console.log(`\x1b[32m[INFO]\x1b[0m ${message}`);
  },
  error: (message: string): void => {
    console.log(`\x1b[31m[ERROR]\x1b[0m ${message}`);
  },
};

export { logger };
  