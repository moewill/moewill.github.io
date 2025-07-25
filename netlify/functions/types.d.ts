// TypeScript declarations for Netlify Functions
declare namespace NodeJS {
  interface ProcessEnv {
    FORMSPREE_ENDPOINT?: string;
  }
}

// Netlify Function types
interface NetlifyEvent {
  httpMethod: string;
  headers: Record<string, string>;
  body: string | null;
  queryStringParameters: Record<string, string> | null;
  pathParameters: Record<string, string> | null;
  requestContext: {
    identity: {
      sourceIp: string;
    };
  };
}

interface NetlifyContext {
  callbackWaitsForEmptyEventLoop: boolean;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: string;
  awsRequestId: string;
}

interface NetlifyResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}