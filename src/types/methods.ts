export interface QueryApiOptions {
  /**
   * The path to the API endpoint.
   */
  path: string;
  /**
   * The HTTP method to use.
   *
   * @default "GET"
   */
  method?: "POST" | "GET" | "PATCH" | "DELETE";
  /**
   * Any query parameters to add to the request.
   */
  params?: unknown;
  /**
   * Any data to send in the request body.
   */
  payload?: object;
}