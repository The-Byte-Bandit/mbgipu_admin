// lib/logger.ts
import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

const logger = pino({
  level: isProduction ? 'info' : 'debug',
  redact: ['password', 'token', 'password_hash', 'auth.token'], // Never log sensitive data
  transport: isProduction 
    ? undefined 
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
  base: {
    env: process.env.NODE_ENV,
    app: 'mbgipu',
  },
});

// Helper functions for consistent logging
export const logAuth = {
  success: (userId: string, action: string) => 
    logger.info({ userId, action }, `Auth ${action} successful`),

  failed: (email: string, action: string, reason: string) => 
    logger.warn({ email, action, reason }, `Auth ${action} failed`),
};

export const logDatabase = {
  write: (table: string, operation: string, userId?: string) => 
    logger.info({ table, operation, userId }, `Database ${operation} on ${table}`),

  error: (table: string, operation: string, error: any, userId?: string) => 
    logger.error({ table, operation, error: error.message, userId }, `Database ${operation} failed`),
};

export const logRequest = (route: string, method: string, status?: number, duration?: number) => {
  logger.info({ route, method, status, duration }, 'Request processed');
};

export default logger;