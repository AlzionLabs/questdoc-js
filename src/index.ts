import { QueryRequest, QueryResponse } from "./types/api";
import { QueryApiOptions } from "./types/methods";

export class QuestGPT {

  private apiKey: string;
  private apiUrl = 'https://api.questgpt.ai/';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async _query({
    path,
    method = "GET",
    params,
    payload,
  }: QueryApiOptions): Promise<QueryResponse> {
    try {
      const url = new URL(path, this.apiUrl);
      if (params && method === "GET")
        Object.entries(params).forEach(([key, value]) =>
          url.searchParams.append(key, value)
        );

      const headers = new Headers();
      headers.set("x-api-key", `${this.apiKey}`);
      headers.set("Content-Type", "application/json");

      const response = await fetch(url.href, {
        headers,
        method,
        body: payload ? JSON.stringify(payload) : undefined,
      });

      if (!response.ok) {
        let errorsJson = await response.json();
        throw {
          status: response.status,
          message: response.statusText,
          errors: errorsJson.errors,
        };
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async makeQuery(
    queryRequest: QueryRequest
  ) {
    return this._query({
      path: "/query",
      payload: queryRequest,
      method: "POST",
    });
  }
}