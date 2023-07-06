import pino from 'pino';
import { getTracingNamespace } from '../../middleware/tracing';

const logger = pino({
  formatters: {
    level(label: string) {
      return { level: label };
    }
  }
});
const logLevels: Array<keyof pino.Logger> = ['debug','error', 'warn', 'info'];
const log: any = {};
for (const level of logLevels) {
  log[level] = (message: string) => {
    const namespace = getTracingNamespace();
    const traceId = namespace && namespace.get('traceId');
    const stack = new Error().stack?.split('\n');
    const caller = stack && stack[2];
    (logger[level] as pino.LogFn)({ traceId, caller }, message);
  };
}
export default log;
