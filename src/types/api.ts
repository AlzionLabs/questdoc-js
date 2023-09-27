export interface QueryRequest {
  query: string;
}

export interface QueryResponse {
  metadata: {
    sources: string[]
  },
  response: string;
}