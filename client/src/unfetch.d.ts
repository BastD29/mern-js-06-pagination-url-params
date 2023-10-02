declare module "unfetch" {
  const fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  export default fetch;
}
