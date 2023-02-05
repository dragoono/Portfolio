import { NitroFetchRequest, TypedInternalResponse } from "nitropack";
import { FetchOptions } from "ofetch";
    
export const useApi = <T = unknown, R extends NitroFetchRequest = NitroFetchRequest>(request: R, opts?: FetchOptions | undefined): Promise<TypedInternalResponse<R, T>> => {
  const config = useRuntimeConfig()
    
  const customFetch = $fetch.create({
    baseURL: 'https://backend.devnik.dev/api',
    onRequest({ request, options }) {
      console.log("Intercepted API", request);
    }
  })
    
  return customFetch(request, opts)
}