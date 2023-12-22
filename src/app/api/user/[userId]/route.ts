import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export function GET(request: Request, {params}: {params: Params}){
  console.log(params.userId)
  return new Response(params.userId)
}