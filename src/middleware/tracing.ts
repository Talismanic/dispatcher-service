import { Request, Response, NextFunction } from 'express';
import { createNamespace, getNamespace } from 'continuation-local-storage';
import { v4 as uuidv4 } from 'uuid';

const tracingNamespace = createNamespace('my-test-app');

export function addTraceId(req: Request, res: Response, next: NextFunction): void {
  tracingNamespace.run(() => {
    const traceId = req.headers['trace-id'] || generateTraceId();
    tracingNamespace.set('traceId', traceId);
    next();
  });
}
function generateTraceId(): string {
  return uuidv4();
}
export function getTracingNamespace() {
  return getNamespace('my-test-app');
}
