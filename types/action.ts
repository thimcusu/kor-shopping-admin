type Action = {
  type: string;
  payload?: Payload;
};

type Payload = {
  params?: any;
  callback?: (data?: any) => any;
  response?: any;
};

type ResponseGenerator = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
};

export type { Action, Payload, ResponseGenerator };
