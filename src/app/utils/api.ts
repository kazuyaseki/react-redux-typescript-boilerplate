type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const api = (url: string, method: Method, body: any | undefined) => {
  return fetch(url, {
    body,
    method
  }).then((response) => response.json());
};

export interface HelloResponse {
  unko: {
    hello: string;
  };
}

// export const fetchHello = (hello: string) => api('/helloWorld', 'GET', hello);
export const fetchHello = (hello: string) => Promise.resolve({ unko: { hello: 'hello' } });
