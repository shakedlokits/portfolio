import pino from 'pino';
import { useMemo } from 'react';

export const createLogger = (name: string) => pino({ name });

export const useLogger = (name: string = 'client') => useMemo(() => createLogger(name), [name]);
