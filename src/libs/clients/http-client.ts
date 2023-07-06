import axios from 'axios';
import { getTracingNamespace } from '../../middleware/tracing';

const httpClient = axios.create();

httpClient.interceptors.request.use(config => {
  const namespace = getTracingNamespace();
  if (namespace) {
    config.headers['trace-id'] = namespace.get('traceId');
  }
  return config;
});

export default httpClient;
