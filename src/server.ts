import app from "./app";
import config from "./config/config";
import { bootDatabase } from "./database/dataSource";
const boot = bootDatabase();

(async () => {
  try {
    app.listen(config.APP_PORT, () => {
      console.log(`Server started on port ${config.APP_PORT} 🔥🔥🔥`);
    });
   
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Database connection error: ${err.message}`);
    } else {
      console.error(`Unexpected error during startup: ${err}`);
    }
    process.exit(1);
  }
})();
