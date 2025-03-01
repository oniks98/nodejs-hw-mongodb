import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const startApp = async () => {
  try {
    // Спочатку підключаємося до MongoDB
    await initMongoConnection();

    // Якщо підключення успішне – запускаємо сервер
    setupServer();
  } catch (error) {
    console.error('Critical error during app startup:', error);
    process.exit(1); // Завершуємо процес, якщо сталася критична помилка
  }
};

// Викликаємо функцію для запуску застосунку
startApp();
